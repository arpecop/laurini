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
    </Accordion>
  )
}
