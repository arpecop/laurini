import PropTypes from 'prop-types'
import React from 'react'

import pic02 from '../images/pic02.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          {!this.props.lang ? (
            <>
              <h2 className="major">Работа</h2>
              <p>
                При нас, вие може да откриете, приятни аромати и атмосфера,
                много положителна енергия.Нашата работа се усъвършенства всеки
                ден с най-новите методи и технологии за успешно справяне с
                проблеми по кожата.
              </p>
              Новата визия е винаги на мода.Тя ни дава онова възвишено добро в
              живота Красотата - чувството че си най-добрия и красив Човек на
              Земята.Комбинацията от специалисти, хубава музика, топли ръце и
              сърце могат освен да те разкрасят и одухотворят.Извън естетичната
              си насоченост силата на светлинната терапия може да оздрави и
              подобри процесите на възстановяване на организма Ви в дадената
              област, след хирургическа намеса, след спортна травма, след стрес
              и преумора.Най вече ние сме там ,където искате да бъдем - до вас
              през целия процес на разкрасяване и възстановяване на вашите кожа,
              нокти и коса.
              <p>
                Всяка душевност носи своята красота.Масажът на глава, лице и
                тяло може да даде мира и спокойствието освен своето лечебно
                действие върху физическото ни състояние в момента.Козметиката за
                лице и тяло е безценен подарък за кожата и сетивата ни.Ние
                държим тя да бъде най близка до вашата кожа и да влияе
                профилактично, възстановяващо и разкрасяващо за вашите кожни
                проблеми, който можем да отстраним по най - приятния и качествен
                начин.Консултацията с нас е безценна информация, за да можем да
                достигнем по-близо до вас и да ви препоръчаме най-ефикасното и
                действащо средство за решаване на вашите проблеми.
              </p>
            </>
          ) : (
            <div>
              <h2 className="major">Work</h2>
              With us, you can find pleasant aromas and atmosphere, a lot of
              positive energy. Our work is improved every day with the latest
              methods and technologies for successful treatment of skin
              problems. The new vision is always in fashion. It gives us that
              sublime good in life. Beauty - the feeling that you are the best
              and most beautiful person on Earth. The combination of
              specialists, good music, warm hands and heart can not only
              beautify and inspire you. Your focus on the power of light therapy
              can heal and improve the recovery processes of your body in the
              area, after surgery, after sports trauma, after stress and
              fatigue. Now we are where you want to be - to you throughout the
              process of beautifying and restoring your skin, nails and hair.
              Every soul brings its own beauty. The massage of the head, face
              and body can give peace and tranquility in addition to its healing
              effect on our physical condition at the moment. Face and body
              cosmetics are an invaluable gift for our skin and senses. We want
              it to be the most close to your skin and to have a prophylactic,
              restorative and beautifying effect on your skin problems, which we
              can eliminate in the most pleasant and high-quality way. The
              consultation with us is invaluable information so that we can
              reach closer to you and recommend you. the most efficient and
              effective means of solving your problems.{' '}
            </div>
          )}

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          {!this.props.lang ? (
            <>
              <h2 className="major">За Нас</h2>
              <ul>
                <li>
                  Melisa Laurini е италианска марка, която създава красота всеки
                  ден. Най-силните и ефективни продукти за лице и тяло на
                  пазара.
                </li>
                <li>
                  Всеки ден правим проучвания за да създадем революция в
                  надпреварата с времето.
                </li>
                <li>
                  В нашата утвърдена работа и дългогодишен опит ние създадохме
                  специален метод на безупречна репутация.
                </li>
                <li>
                  Ние създаваме красота всеки ден която е комбинация от нашият
                  опит и ръце които извайват овала на лицето.
                </li>
                <li>
                  Нашите клиенти всеки ден говорят за чувството да бъдеш
                  единствен, индивидуален и по своему съвършен.
                </li>
                <li>
                  Представата ни за красота се управлява от естетиката и
                  индивидуалността на всеки наш доволен клиент. Ние галим
                  сетивата чрез натуралните етерични масла и масажна техника
                  Melisa Laurini.
                </li>
                <li>
                  Ние имаме индивидуален подход към кожата на всеки клиент.
                </li>
                <li>
                  Изграждаме програмата ви и следим резултатите за по голяма
                  ефективност.
                </li>
              </ul>
            </>
          ) : (
            <>
              <h2 className="major">About Us</h2>
              <ul>
                <li>
                  Melisa Laurini is an Italian brand that creates beauty for
                  everyone day. The strongest and most effective products for
                  face and body market.
                </li>
                <li>
                  Every day we do research to create a revolution in the race
                  against time.
                </li>
                <li>
                  In our established work and many years of experience we have
                  created special method of impeccable reputation.
                </li>
                <li>
                  We create beauty every day which is a combination of ours
                  experience and hands that sculpt the oval of the face.
                </li>
                <li>
                  Our clients talk every day about the feeling of being unique,
                  individual and perfect in its own way.
                </li>
                <li>
                  Our idea of ​​beauty is governed by its aesthetics the
                  individuality of each of our satisfied customers. We caress
                  the senses through natural essential oils and massage
                  techniques Melisa Laurini.
                </li>
                <li>
                  We have an individual approach to the skin of each client.
                </li>
                <li>
                  We build your program and monitor the results for more
                  efficiency.
                </li>
              </ul>
            </>
          )}

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          {!this.props.lang ? (
            <>
              <h2 className="major">Контакт</h2>
              <form action="https://formspree.io/f/xpzonnqd" method="POST">
                <div className="field half first">
                  <label htmlFor="name">Име</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                  <label htmlFor="message">Съобщение</label>
                  <textarea name="message" id="message" rows="4"></textarea>
                </div>
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      value="Изпрати съобщение"
                      className="special"
                    />
                  </li>
                  <li>
                    <input type="reset" value="Нулирай" />
                  </li>
                </ul>
              </form>
            </>
          ) : (
            <>
              <h2 className="major">Contact</h2>
              <form action="https://formspree.io/f/xpzonnqd" method="POST">
                <div className="field half first">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="4"></textarea>
                </div>
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      value="Send Message"
                      className="special"
                    />
                  </li>
                  <li>
                    <input type="reset" value="Reset" />
                  </li>
                </ul>
              </form>
            </>
          )}

          <ul className="icons">
            <li>
              <a
                href="https://www.facebook.com/beautician.nvq3"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/melisa.laurini/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
