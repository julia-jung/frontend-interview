import { FormEvent } from 'react';

export default function UncontrolledForm() {
  const SUBMIT_URL = 'https://www.greatfrontend.com/api/questions/contact-form';

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const form = Object.fromEntries(formData);
    try {
      const response = await fetch(SUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          // name: formData.get('name'),
          // email: formData.get('email'),
          // message: formData.get('message'),
        }),
      });
      const data = await response.text();
      alert(data);

      formElement.reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      className='contact-form'
      action={SUBMIT_URL}
      method='post'
      onSubmit={handleSubmit}
    >
      <div className='contact-form__item'>
        <label htmlFor='name'>Name</label>
        <input id='name' type='text' />
      </div>
      <div className='contact-form__item'>
        <label htmlFor='email'>Email</label>
        <input id='email' type='text' />
      </div>
      <div className='contact-form__item contact-form__item--lg'>
        <label htmlFor='message'>Message</label>
        <textarea id='message' />
      </div>
      <div>
        <button type='submit'>Send</button>
      </div>
    </form>
  );
}
