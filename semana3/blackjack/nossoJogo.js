console.log("Bem vindo ao jogo de Blackjack");
let cartau1 = comprarCarta();
let cartau2 = comprarCarta();
let cartac1 = comprarCarta();
let cartac2 = comprarCarta();
let pontou = cartau1.valor + cartau2.valor;
let pontoc = cartac1.valor + cartac2.valor;
if (confirm("Quer iniciar uma nova rodada?")) {
  console.log(
    "Usuario - Cartas:",
    cartau1.texto,
    cartau2.texto,
    "- pontuação:",
    pontou
  );
  console.log("Computador - Carta:", cartac1.texto);
  while (pontou === 22) {
    //Desafio 8
    cartau1 = comprarCarta();
    cartau2 = comprarCarta();
    pontou = cartau1.valor + cartau2.valor;
    console.log(
      "Usuario - Cartas:",
      cartau1.texto,
      cartau2.texto,
      "- pontuação:",
      pontou
    );
  }
  while (pontoc === 22) {
    cartac1 = comprarCarta();
    cartac2 = comprarCarta();
    pontoc = cartac1.valor + cartac2.valor;
    console.log("Computador - Carta:", cartac1.texto);
  }
  if (confirm("deseja comprar mais uma carta?")) {
    //Desafio 9
    cartau3 = comprarCarta();
    pontou = cartau1.valor + cartau2.valor + cartau3.valor;
    console.log(
      "Usuario - Cartas:",
      cartau1.texto,
      cartau2.texto,
      cartau3.texto,
      "- pontuação:",
      pontou
    );
    if (pontou < 21) {
      //Desafio 10
      if (confirm("Deseja comprar mais uma carta?")) {
        cartau4 = comprarCarta();
        pontou = cartau1.valor + cartau2.valor + cartau3.valor + cartau4.valor;
        console.log(
          "Usuario - Cartas:",
          cartau1.texto,
          cartau2.texto,
          cartau3.texto,
          cartau4.texto,
          "- pontuação:",
          pontou
        );
        if (pontou < 21) {
          //Desafio 10
          if (confirm("Deseja comprar mais uma carta?")) {
            cartau5 = comprarCarta();
            pontou =
              cartau1.valor + cartau2.valor + cartau3.valor + cartau4.valor + cartau5.valor;
            console.log(
              "Usuario - Cartas:",
              cartau1.texto,
              cartau2.texto,
              cartau3.texto,
              cartau4.texto,
              cartau5.texto,
              "- pontuação:",
              pontou
            );
          }
        }
      }
    }
  }
} else {
  console.log("O jogo acabou");
}
console.log(
  "Computador - Cartas:",
  cartac1.texto,
  cartac2.texto,
  "pontuação:",
  pontoc
);

if (pontoc < pontou && pontoc < 21 && pontou <= 21) {
  //Desafio 11
  cartac3 = comprarCarta();
  pontoc = cartac1.valor + cartac2.valor + cartac3.valor;
  console.log(
    "Computador - Cartas:",
    cartac1.texto,
    cartac2.texto,
    cartac3.texto,
    "pontuação:",
    pontoc
  );
}
if (pontoc < pontou && pontoc < 21 && pontou <= 21) {
  cartac4 = comprarCarta();
  pontoc = cartac1.valor + cartac2.valor + cartac3.valor + cartac4.valor;
  console.log(
    "Computador - Cartas:",
    cartac1.texto,
    cartac2.texto,
    cartac3.texto,
    cartac4.texto,
    "pontuação:",
    pontoc
  );
}
if (pontoc < pontou && pontoc < 21 && pontou <= 21) {
   cartac5 = comprarCarta();
   pontoc = cartac1.valor + cartac2.valor + cartac3.valor + cartac4.valor +cartac5.valor;
   console.log(
     "Computador - Cartas:",
     cartac1.texto,
     cartac2.texto,
     cartac3.texto,
     cartac4.texto,
     cartac5.texto,
     "pontuação:",
     pontoc
   );
 }

if ((pontoc > 21 || pontou > pontoc) && pontou < 22) {
  //Desafio 12
  console.log("O usuario ganhou");
} else {
  if (pontou < pontoc || pontou > 22) {
    console.log("O computador ganhou");
  } else {
    console.log("Empate!");
  }
}
