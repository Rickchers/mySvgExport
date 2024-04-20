import React, { useState } from "react";

import Svg from "./Svg";

function Form(props) {
  const [input, setInput] = useState("");
  const [clapan, setClapan] = useState("");
  const [width, setWidth] = useState("");

  function handleChangeInput(e) {
    setInput(e.target.value);
  };
  function handleChangeInputKlapan(e) {
    setClapan(e.target.value);
  };

  function inputHanle(i) {
    const dims = i.split('*');
    //const l = (dims[0])*1;
    //const b = (dims[1])*1;
    //const h = (dims[2])*1;
    setWidth(`0 0 7680 2400`);
    //setWidth(`0 0 1680 1000`);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //alert(input);
    props.sayHi(input, clapan);
    inputHanle(input);

  }
  return (
    <div>

      <svg
        id='mysvg'
        width="1100px"          
        height="1000px"
        // viewBox="0 0 7680 2400"
        viewBox={width}
      />
      <form
        class="form"
        name="myForm"
        novalidate
        onSubmit={handleSubmit}
      >
        <h2 class="popup__title">Новое место</h2>

        <fieldset class="popup__fieldset">

          <section class="form__section">
            <input
              required
              onChange={handleChangeInput}
              
              id="cardName"
              value={input}
              placeholder="Размеры"
              name="myInput"
            />

            <input
              required
              onChange={handleChangeInputKlapan}
              
              id="clapan"
              value={clapan}
              placeholder="Ширина клеевого клапана"
              name="myInputClapan"
            />
            
          </section>

        </fieldset>

        <button type="submit" id="addCardSaveButton">Сохранить</button>
      </form>
    </div>
  )
}

export default Form;