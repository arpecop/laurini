import React from 'react'
export default class Services extends React.Component {
  constructor(props) {
    super(props)
    this.getValue = this.getValue.bind(this)
  }
  getValue(e) {
    const chk = e.target
    console.log(chk.checked)
    console.log(chk.value)
  }

  render() {
    const arr = ['a', 'b', 'c', 'd']
    return (
      <form action="https://formspree.io/f/xpzonnqd" method="POST">
        {arr.map((value, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                id={'chk' + index}
                onChange={this.getValue}
                name="category"
                value={value}
              />
              <label htmlFor={'chk' + index}>{value}</label>
            </div>
          )
        })}
        <input type="submit" value="Send" />
      </form>
    )
  }
}
