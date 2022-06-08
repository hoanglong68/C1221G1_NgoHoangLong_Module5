import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

   /** khai báo số hiện tại là số nằm trên màn hình bằng string, ở đây là "0", toán hạng đầu tiên và toán tử = null,
    trạng thái chờ số thứ 2 là fasle
    **/
  currentNumber = "0";
  firstOperand = null;
  operator = null;
  waitForSecondNumber: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }
/**tạo phương thức getNumber để lấy số từ bàn phím hiển thị lên màn hình, trạng thái chờ số thứ 2 là true (mặc định là false),
 * gắn số đang hiển thị trên màn hình = view tức là số đầu tiên sau đó chuyển sang trạng thái waitNumber = false,
 * else trạng thái chờ là false thì sẽ cộng dồn số vào currentNumber
 * **/
  public getNumber(view: string) {
    if (this.waitForSecondNumber) {
      this.currentNumber = view;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0' ? this.currentNumber = view : this.currentNumber += view;
    }
  }

  /**
   phương thức tính toán bằng switch case, tham số 1 là toán tử và tham số 2 là toán hạng, nếu dấu bằng thì trả về toán hạng
   **/
  public doCalculation(operator, secondOperator) {
    switch (operator) {
      case '+':
        return this.firstOperand += secondOperator;
      case '-':
        return this.firstOperand -= secondOperator;
      case '*':
        return this.firstOperand *= secondOperator;
      case '/':
        return this.firstOperand /= secondOperator;
      case '=':
        return secondOperator;
    }
  }

  /**
   * phương thức lấy toán tử, nếu toán hạng đang null thì ép kiểu số trên màn hình thành số và gắn vào toán hạng,
   * nếu toán tử có hiện hữu thì gọi phương thức doCalculator đưa toán hạng và số trên màn hình vào sau đó gán cho result
   * rồi tiếp tục gán result cho toán hạng để thực hiện lần tính tiếp theo đồng thời gán result cho currentNumber để hiển thị
   * gán toán tử và trạng thái chờ lại bằng true
   **/
  public getOperator(operator: string) {
    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    } else if (this.operator) {
      const result = this.doCalculation(this.operator, Number(this.currentNumber));
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = operator;
    this.waitForSecondNumber = true;
  }

  /**
   * phương thức clear dùng để clear toàn bộ màn hình đưa lại chương trình về lúc đầu khi nhấn C
   */
  public clear() {
    this.currentNumber = "0";
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
}
