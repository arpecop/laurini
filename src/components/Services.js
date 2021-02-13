import React from 'react'
import DatePicker from 'react-date-picker'
export default class Services extends React.Component {
  constructor(props) {
    super(props)
    this.getValue = this.getValue.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  state = {
    value: new Date(),
  }
  getValue(e) {
    const chk = e.target
    console.log(chk.checked)
    console.log(chk.value)
  }
  onChange(e) {
    console.log(e)
    this.setState({ value: e })
  }

  render() {
    const arr = [
      {
        id: 0,
        name: 'Апаратен пълен маникюр с гел лак',
        timespan: 60,
        price: 25,
      },
      {
        id: 1,
        name: 'Сваляне на гел лак',
        timespan: 30,
        price: 5,
      },
      {
        id: 2,
        name: 'Декорация на нокът',
        timespan: 5,
        price: 1,
      },
      {
        id: 3,
        name: 'Гел на нокът',
        timespan: 5,
        price: 2,
      },
      {
        id: 4,
        name: 'Гел на естествен нокът',
        timespan: 50,
        price: 35,
      },
      {
        id: 5,
        name: 'Ноктопластика',
        timespan: 180,
        price: 50,
      },
      {
        id: 6,
        name: 'Оформяне на вежди',
        timespan: 15,
        price: 10,
      },
      {
        id: 7,
        name: 'Кола маска (ленти) подмишници',
        timespan: 15,
        price: 8,
      },
      {
        id: 8,
        name: 'Кола маска топла цял интим',
        timespan: 25,
        price: 20,
      },
      {
        id: 9,
        name: 'Кола маска топла бразилска',
        timespan: 20,
        price: 17,
      },
      {
        id: 10,
        name: 'Кола маска топла  бикини',
        timespan: 10,
        price: 10,
      },
      {
        id: 11,
        name: 'Кола маска с лента цели ръце',
        timespan: 15,
        price: 12,
      },
      {
        id: 12,
        name: 'Кола маска с лента половин ръце',
        timespan: 8,
        price: 8,
      },
      {
        id: 13,
        name: 'Кола маска цели крака с лента',
        timespan: 35,
        price: 35,
      },
      {
        id: 14,
        name: 'Кола маска топла горна устна',
        timespan: 5,
        price: 5,
      },
      {
        id: 16,
        name: 'Консултация с Melisa Laurini',
        timespan: 15,
        price: 20,
      },

      {
        id: 17,
        name: 'Масажна техника Melisa Laurini',
        timespan: 30,
        price: 30,
      },
      {
        id: 18,
        name: 'Киселина Light + масажна техника ML, маска',
        timespan: 40,
        price: 50,
      },
      {
        id: 19,
        name: 'Киселина Bright + масажна техника ML, маска ',
        timespan: 45,
        price: 60,
      },
      {
        id: 20,
        name: 'Киселина Time + масажна техника ML, маска',
        timespan: 50,
        price: 70,
      },

      {
        id: 21,
        name: 'NCTF 35 HA + мезороллер 1 мм ',
        timespan: 60,
        price: 100,
      },
      {
        id: 22,
        name: 'NCTF + Bright Peel ',
        timespan: 100,
        price: 150,
      },
    ]
    return (
      <form action="https://formspree.io/f/rudix.lab@gmail.com" method="POST">
        <div className="field">
          <label htmlFor="name">Име:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field">
          <label htmlFor="tel">Телефон:</label>
          <input type="text" name="tel" id="tel" />
        </div>
        <table>
          {arr.map(value => {
            return (
              <tr key={value.id} style={{ width: '100%' }}>
                <td>
                  <input
                    type="checkbox"
                    id={'chk' + value.id}
                    onChange={this.getValue}
                    name="category"
                    value={value.name}
                  />
                  <label htmlFor={'chk' + value.id}>{value.name}</label>
                </td>
                <td className="td">{value.timespan} мин.</td>
                <td className="td">{value.price} лв.</td>
              </tr>
            )
          })}
          <tr>
            <DatePicker onChange={this.onChange} value={this.state.value} />
          </tr>
        </table>

        <p>
          <input type="submit" value="Поръчай" />
        </p>
      </form>
    )
  }
}
