import React from 'react'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css'

export default function FAQ() {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Кои са основните причини за появата на пигментни петна?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Основните причини за появата на пигментни петна са слънчевите лъчи,
            хормоналния дисбаланс, орални контрацептиви и други лекарства,
            наранявания и възпалителни процеси на кожата, както и след агресивни
            козметични процедури. Най-често срещаните форми на хиперпигментация
            са лунички, мелазма (хлоазма, бременност), възрастови петна,
            пост-възпалителна хиперпигментация, след акне пигментация и др.
            Излагането на слънце след появата на акне на такива петна може да
            увеличи тяхното развитие и може да представлява сериозен естетически
            проблем. Понякога пигментацията може да се влоши и да причини
            онкологично състояние на кожата.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Какво представлява ВИТИЛИГОТО?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Витилиго е заболяване, което причинява обезцветяване на кожата под
            формата на петна. С течение на времето се увеличават зоните с
            променена промяна. Състоянието на кожата може да засегне всяка част
            от тялото, косата и вътрешността на устата.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Кой е изложен на риск за възрастови петна?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Хора от всички възрасти и полове . Въпреки това, възрастови петна се
            срещат по-често при хора с определени рискови фактори. Те включват:
            <ul>
              <li>възраст над 40 години.</li>
              <li> хора, които са изложени на слънце често.</li>
              <li>хора, които често използват солариуми.</li>
            </ul>
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Какви процедури да си направя при козметик Melisa Laurini за да
            отстраня възрастови петна?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Някои възрастови петна могат да бъдат намалени дори и след първата
            професионална козметична процедура. Въпреки това, в зависимост от
            това колко голяма пигментация е и колко дълбоко се основава на
            кожата, ние ще определи колко посещения на лечения ще са необходими.
            Те обикновено са от 3 до 6 процедури на интервали от 10 дни
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Какви киселини използват в кабинета на Melisa Laurini и каква
            времетраеност имат?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Целият процес на химическия пилинг обикновено отнема час и
            обикновено пациентът изпитва малко или без зачервяване на кожата или
            други странични ефекти. След лек химически пилинг той може да очаква
            да се върне незабавно към ежедневните си дейности. Многократните
            лечения обикновено са необходими за постигане на оптимални
            резултати. Видовете киселини с които работя съдържат гликолова,
            салицилова, бадемова и млечна.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Какво е действието на гликолова, бадемова,салицилова и млечна
            киселина?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <h3>Гликолова киселина</h3>
          <ul class="c15 lst-kix_n7jtbrbclw3y-0 start">
            <li>
              <span>Ексфолиращо и антибактериално действие;</span>
            </li>
            <li>
              <span>Антиоксидант;</span>
            </li>
            <li>
              <span>
                Спомага възстановяването на фото-увредената кожа и има
                anti-aging действие;
              </span>
            </li>
            <li>
              <span>
                Директно повишава синтеза на колаген от фибробластите чрез
                моделираща активация;
              </span>
            </li>
            <li>
              <span>
                Повишава плътността на епидермиса, епидермалните и дермални нива
                на хиалуронова киселина
              </span>
            </li>
            <li>
              <span>
                Положителна промяна във вида, текстурата и функционирането;
              </span>
            </li>
            <li>
              <span>
                Повишава синтеза на колаген от фибробластите чрез моделираща
                активация.
              </span>
            </li>
          </ul>
          <h3>Бадемова киселина</h3>
          <ul class="c15 lst-kix_shzuvy9ir1sx-0 start">
            <li class="c3 c12 li-bullet-0">
              <span class="c1">
                Бадемовата киселина е хирален метаболит, използван в химически
                пилинги като уринарен антисептик и компонент за различни
                медикаменти;
              </span>
            </li>
            <li class="c3 c12 li-bullet-0">
              <span class="c1">Ексфолиращо и антибактериално действие;</span>
            </li>
            <li class="c3 c12 li-bullet-0">
              <span class="c1">Подобрява еластичността на кожата;</span>
            </li>
            <li class="c3 c12 li-bullet-0">
              <span class="c1">Изсветлява кожата.</span>
            </li>
          </ul>
          <h3>Салицилова киселина</h3>
          <ul>
            <li>
              Повишава кератолитично действие: способността да отстранява
              клетките от най-повърхностния слой на кожата
            </li>
            <li>Улеснява пенетрацията на другите активни съставки в кожата</li>
            <li>Окислител</li>
            <li>
              Противогъбично – противовъзпалително действие – антипиретично
              (против сърбеж)
            </li>
            <li>Абсорбира UV лъчите</li>
            <li>
              Липидно разтворима и поради това се смесва с епидермалните липиди
              и липидите на себумната жлеза
            </li>
          </ul>
          <h3>Млечна киселина</h3>
          <ul>
            <li>Инхибитор на тирозиназата - потиска образуването на меланин</li>
            <li>
              Повишава секретирането на васкуларния ендотелен растежен фактор
              (VEGF)
            </li>
            <li>Повишава епидермалната и дермална плътност и устойчивост</li>
            <li>Подобрява структурата и вида на кожата</li>
          </ul>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}
