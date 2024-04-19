import { ChangeEvent, FormEvent, useState } from 'react';

export default function ControlledForm() {
  const FORM_URL = 'https://www.greatfrontend.com/api/questions/contact-form';
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const updateForm = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    setForm({ ...form, [input.name]: input.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(FORM_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
        }),
      });
      setForm({ name: '', email: '', message: '' });
      alert(await response.text());
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <div className='contact-form__item'>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          type='text'
          value={form.name}
          onChange={updateForm}
        />
      </div>
      <div className='contact-form__item'>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          name='email'
          type='text'
          value={form.email}
          onChange={updateForm}
        />
      </div>
      <div className='contact-form__item contact-form__item--lg'>
        <label htmlFor='message'>Message</label>
        <textarea
          id='message'
          name='message'
          value={form.message}
          onChange={updateForm}
        />
      </div>
      <div>
        <button type='submit'>Send</button>
      </div>
    </form>
  );
}
