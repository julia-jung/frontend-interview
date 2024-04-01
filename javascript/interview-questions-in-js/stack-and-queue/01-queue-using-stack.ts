/**
 * ** enqueue와 decueue를 2개의 stack을 이용해서 구현 **
 * 
 * - input stack과 output stack 함수 생성
 * - enqueue함수는 input stack 배열에 push만 하고
 * - dequeue 함수는 output stack의 가장 뒤 item을 반환하도록
 * - 만약 output stack이 비어있으면 input stack을 확인해서 item을 뒤에서부터 꺼내어 아래에 차곡차곡 쌓아서 output stack에 넣기
 */
class QueueWithStack {
  private inputStack = [];
  private outputStack = [];
  
  public enqueue(item) {
    this.inputStack.push(item);
  }
  
  public dequeue() {
    if (this.outputStack.length === 0) {
      // 1. output stack이 비어있으면 input stack의 가장 최근 item부터 꺼내서 output stack에 넣는다
      // 그러면 output stack에는 가장 먼저 들어간 item이 가장 뒤에 위치하게 됨
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop());
      }
    }
    return this.outputStack.pop();
  }

}

const queue = new QueueWithStack();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1 (inputStack = [])
console.log(queue.dequeue()); // 2 (outputStack = [])
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue()); // 3 (inputStack = [], outputStack = [4])