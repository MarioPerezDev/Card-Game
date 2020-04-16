const gameSettings = {
  "title":"game1",
  "rounds":[
    {
      "roundid":0,
      "enemyName":"Hacker001",
      //El texto de debajo es el que se deberá cambiar para dar información cada ronda
      "roundText":"Este texto irá en cada ronda para aportar información referente a la pregunta. El profesor podrá rellenarlo de forma sencilla.",
      "enemyPic":"https:/thenypost.files.wordpress.com/2017/12/171205-hacking-experts-beginning-feature.jpg?quality=80&strip=all&w=618&h=410&crop=1",
      "enemyCard":{
        "number":1,
        //  Cambiar el nombre de la carta:
        "name":"Hackeo en masa",
        //  Selecciona el poder de la carta que contiene la pregunta. Cuanto más difícil, más poder debe tener:
        "power":2,
        //  Introduzca la url de la imagen de la carta
        "image":"https:/i11d.3djuegos.com/juegos/5919/_logos_y_personajes_/fotos/maestras/_logos_y_personajes_-4911618.jpg",
        //  Aquí es donde irá la pregunta
        "powerinfo":"Esta carta anulará todo lo que ocurra en este turno y hasta el final del próximo. Sólo puede jugarse una vez por partida, por lo que debes administrarla bien. Ten mucho cuidado de cuando la usas que es delicada(texto genérico)",
      },
      "ownCards":[{
        // Escriba el nombre de la respuesta de esta carta:
        "name":"Hackeo en masa",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":1,
        //  Imagen asociada a la carta
        "image":"https:/i11d.3djuegos.com/juegos/5919/_logos_y_personajes_/fotos/maestras/_logos_y_personajes_-4911618.jpg",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"Esta carta anulará todo lo que ocurra en este turno y hasta el final del próximo. Sólo puede jugarse una vez por partida, por lo que debes administrarla bien. Ten mucho cuidado de cuando la usas que es delicada(texto genérico)",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"Esta carta es una mala elección, la correcta habría sido la 3.",
      },
      {
        // Escriba el nombre de la respuesta de esta carta:
        "name":"Hackeo en masa",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":2,
        //  Imagen asociada a la carta
        "image":"https:/i11d.3djuegos.com/juegos/5919/_logos_y_personajes_/fotos/maestras/_logos_y_personajes_-4911618.jpg",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"Esta carta anulará todo lo que ocurra en este turno y hasta el final del próximo. Sólo puede jugarse una vez por partida, por lo que debes administrarla bien. Ten mucho cuidado de cuando la usas que es delicada(texto genérico)",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"Esta no es la mejor opción, habría sido mejor la opción 3.",
      },
      {
        // Escriba el nombre de la respuesta de esta carta:
        "name":"Hackeo en masa",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":3,
        //  Imagen asociada a la carta
        "image":"https:/i11d.3djuegos.com/juegos/5919/_logos_y_personajes_/fotos/maestras/_logos_y_personajes_-4911618.jpg",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"Esta carta anulará todo lo que ocurra en este turno y hasta el final del próximo. Sólo puede jugarse una vez por partida, por lo que debes administrarla bien. Ten mucho cuidado de cuando la usas que es delicada(texto genérico)",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"Esta sí es la mejor carta posible, enhorabuena!",
      },
      ],
    },
    {
      "roundid":1,
      "enemyPic":"https:/thenypost.files.wordpress.com/2017/12/171205-hacking-experts-beginning-feature.jpg?quality=80&strip=all&w=618&h=410&crop=1",
      "enemyName":"Hacker002",
      //  El texto de debajo es el que se deberá cambiar para dar información cada ronda
      "roundText":"Este texto irá en cada ronda para aportar información referente a la pregunta. El profesor podrá rellenarlo de forma sencilla.",
      "enemyCard":{
        "number":1,
        //  Cambiar el nombre de la carta:
        "name":"Hackeo en masa",
        //  Selecciona el poder de la carta que contiene la pregunta. Cuanto más difícil, más poder debe tener:
        "power":2,
        //  Introduzca la url de la imagen de la carta
        "image":"https:/i11d.3djuegos.com/juegos/5919/_logos_y_personajes_/fotos/maestras/_logos_y_personajes_-4911618.jpg",
        //  Aquí es donde irá la pregunta
        "powerinfo":"Esta carta anulará todo lo que ocurra en este turno y hasta el final del próximo. Sólo puede jugarse una vez por partida, por lo que debes administrarla bien. Ten mucho cuidado de cuando la usas que es delicada(texto genérico)",
      },
      "ownCards":[{
        // Escriba el nombre de la respuesta de esta carta:
        "name":"Hackeillo",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":1,
        //  Imagen asociada a la carta
        "image":"https:/as.com/meristation/imagenes/2019/06/06/betech/1559858238_866290_1559858299_noticia_normal.jpg",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"Esta carta anulará todo lo que ocurra en este turno y hasta el final del próximo. Sólo puede jugarse una vez por partida, por lo que debes administrarla bien. Ten mucho cuidado de cuando la usas que es delicada(texto genérico)",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"Esta carta es una mala elección, la correcta habría sido la 3.",
      },
      {
        // Escriba el nombre de la respuesta de esta carta:
        "name":"Hackeillo",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":2,
        //  Imagen asociada a la carta
        "image":"https:/as.com/meristation/imagenes/2019/06/06/betech/1559858238_866290_1559858299_noticia_normal.jpg",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"Esta carta anulará todo lo que ocurra en este turno y hasta el final del próximo. Sólo puede jugarse una vez por partida, por lo que debes administrarla bien. Ten mucho cuidado de cuando la usas que es delicada(texto genérico)",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"Esta no es la mejor opción, habría sido mejor la opción 3.",
      },
      {
        // Escriba el nombre de la respuesta de esta carta:
        "name":"Hackeillo",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":3,
        //  Imagen asociada a la carta
        "image":"https:/as.com/meristation/imagenes/2019/06/06/betech/1559858238_866290_1559858299_noticia_normal.jpg",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"Esta carta anulará todo lo que ocurra en este turno y hasta el final del próximo. Sólo puede jugarse una vez por partida, por lo que debes administrarla bien. Ten mucho cuidado de cuando la usas que es delicada(texto genérico)",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"Esta sí es la mejor carta posible, enhorabuena!",
      },
      ],
    },
    {
      "roundid":2,
      "enemyName":"Hacker001",
      //El texto de debajo es el que se deberá cambiar para dar información cada ronda
      "roundText":"Este texto irá en cada ronda para aportar información referente a la pregunta. El profesor podrá rellenarlo de forma sencilla.",
      "enemyPic":"https:/thenypost.files.wordpress.com/2017/12/171205-hacking-experts-beginning-feature.jpg?quality=80&strip=all&w=618&h=410&crop=1",
      "enemyCard":{
        "number":1,
        //  Cambiar el nombre de la carta:
        "name":"Hackeo en masa",
        //  Selecciona el poder de la carta que contiene la pregunta. Cuanto más difícil, más poder debe tener:
        "power":2,
        //  Introduzca la url de la imagen de la carta
        "image":"https:/i11d.3djuegos.com/juegos/5919/_logos_y_personajes_/fotos/maestras/_logos_y_personajes_-4911618.jpg",
        //  Aquí es donde irá la pregunta
        "powerinfo":"Esta carta anulará todo lo que ocurra en este turno y hasta el final del próximo. Sólo puede jugarse una vez por partida, por lo que debes administrarla bien. Ten mucho cuidado de cuando la usas que es delicada(texto genérico)",
      },
      "ownCards":[{
        // Escriba el nombre de la respuesta de esta carta:
        "name":"Hackeo en masa",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":1,
        //  Imagen asociada a la carta
        "image":"https:/i11d.3djuegos.com/juegos/5919/_logos_y_personajes_/fotos/maestras/_logos_y_personajes_-4911618.jpg",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"Esta carta anulará todo lo que ocurra en este turno y hasta el final del próximo. Sólo puede jugarse una vez por partida, por lo que debes administrarla bien. Ten mucho cuidado de cuando la usas que es delicada(texto genérico)",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"Esta carta es una mala elección, la correcta habría sido la 3.",
      },
      {
       // Escriba el nombre de la respuesta de esta carta:
        "name":"Hackeo en masa",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":2,
        //  Imagen asociada a la carta
        "image":"https:/i11d.3djuegos.com/juegos/5919/_logos_y_personajes_/fotos/maestras/_logos_y_personajes_-4911618.jpg",
        //  Introduzca la respuesta que se asociará a la carta
        "feedback":"Esta no es la mejor opción, habría sido mejor la opción 3.",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "powerinfo":"Esta carta anulará todo lo que ocurra en este turno y hasta el final del próximo. Sólo puede jugarse una vez por partida, por lo que debes administrarla bien. Ten mucho cuidado de cuando la usas que es delicada(texto genérico)",
      },
      {
        // Escriba el nombre de la respuesta de esta carta:
        "name":"Hackeo en masa",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":3,
        //  Imagen asociada a la carta
        "image":"https:/i11d.3djuegos.com/juegos/5919/_logos_y_personajes_/fotos/maestras/_logos_y_personajes_-4911618.jpg",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"Esta carta anulará todo lo que ocurra en este turno y hasta el final del próximo. Sólo puede jugarse una vez por partida, por lo que debes administrarla bien. Ten mucho cuidado de cuando la usas que es delicada(texto genérico)",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"Esta sí es la mejor carta posible, enhorabuena!",
      },
      ],
    },
    {
      "roundid":3,
      "enemyPic":"https:/thenypost.files.wordpress.com/2017/12/171205-hacking-experts-beginning-feature.jpg?quality=80&strip=all&w=618&h=410&crop=1",
      "enemyName":"Hacker002",
      //  El texto de debajo es el que se deberá cambiar para dar información cada ronda
      "roundText":"Este texto irá en cada ronda para aportar información referente a la pregunta. El profesor podrá rellenarlo de forma sencilla.",
      "enemyCard":{
        "number":1,
        //  Cambiar el nombre de la carta:
        "name":"Hackeo en masa",
        //  Selecciona el poder de la carta que contiene la pregunta. Cuanto más difícil, más poder debe tener:
        "power":2,
        //  Introduzca la url de la imagen de la carta
        "image":"https:/i11d.3djuegos.com/juegos/5919/_logos_y_personajes_/fotos/maestras/_logos_y_personajes_-4911618.jpg",
        //  Aquí es donde irá la pregunta
        "powerinfo":"Esta carta anulará todo lo que ocurra en este turno y hasta el final del próximo. Sólo puede jugarse una vez por partida, por lo que debes administrarla bien. Ten mucho cuidado de cuando la usas que es delicada(texto genérico)",
      },
      "ownCards":[{
        "number":1,
        // Escriba el nombre de la respuesta de esta carta:
        "name":"Hackeillo",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":1,
        //  Imagen asociada a la carta
        "image":"https:/as.com/meristation/imagenes/2019/06/06/betech/1559858238_866290_1559858299_noticia_normal.jpg",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"Esta carta anulará todo lo que ocurra en este turno y hasta el final del próximo. Sólo puede jugarse una vez por partida, por lo que debes administrarla bien. Ten mucho cuidado de cuando la usas que es delicada(texto genérico)",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"Esta carta es una mala elección, la correcta habría sido la 3.",
      },
      {
       // Escriba el nombre de la respuesta de esta carta:
        "name":"Hackeillo",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":2,
        //  Imagen asociada a la carta
        "image":"https:/as.com/meristation/imagenes/2019/06/06/betech/1559858238_866290_1559858299_noticia_normal.jpg",
        //  Introduzca la respuesta que se asociará a la carta
        "feedback":"Esta no es la mejor opción, habría sido mejor la opción 3.",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "powerinfo":"Esta carta anulará todo lo que ocurra en este turno y hasta el final del próximo. Sólo puede jugarse una vez por partida, por lo que debes administrarla bien. Ten mucho cuidado de cuando la usas que es delicada(texto genérico)",
      },
      {
        // Escriba el nombre de la respuesta de esta carta:
        "name":"Hackeillo",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":3,
        //  Imagen asociada a la carta
        "image":"https:/as.com/meristation/imagenes/2019/06/06/betech/1559858238_866290_1559858299_noticia_normal.jpg",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"Esta carta anulará todo lo que ocurra en este turno y hasta el final del próximo. Sólo puede jugarse una vez por partida, por lo que debes administrarla bien. Ten mucho cuidado de cuando la usas que es delicada(texto genérico)",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"Esta sí es la mejor carta posible, enhorabuena!",
      },
      ],
    },
    {
      "roundid":4,
      "enemyName":"Hacker001",
      //El texto de debajo es el que se deberá cambiar para dar información cada ronda
      "roundText":"Este texto irá en cada ronda para aportar información referente a la pregunta. El profesor podrá rellenarlo de forma sencilla.",
      "enemyPic":"https:/thenypost.files.wordpress.com/2017/12/171205-hacking-experts-beginning-feature.jpg?quality=80&strip=all&w=618&h=410&crop=1",
      "enemyCard":{
        "number":1,
        //  Cambiar el nombre de la carta:
        "name":"Hackeo en masa",
        //  Selecciona el poder de la carta que contiene la pregunta. Cuanto más difícil, más poder debe tener:
        "power":2,
        //  Introduzca la url de la imagen de la carta
        "image":"https:/i11d.3djuegos.com/juegos/5919/_logos_y_personajes_/fotos/maestras/_logos_y_personajes_-4911618.jpg",
        //  Aquí es donde irá la pregunta
        "powerinfo":"Esta carta anulará todo lo que ocurra en este turno y hasta el final del próximo. Sólo puede jugarse una vez por partida, por lo que debes administrarla bien. Ten mucho cuidado de cuando la usas que es delicada(texto genérico)",
      },
      "ownCards":[{
        // Escriba el nombre de la respuesta de esta carta:
        "name":"Hackeo en masa",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":1,
        //  Imagen asociada a la carta
        "image":"https:/i11d.3djuegos.com/juegos/5919/_logos_y_personajes_/fotos/maestras/_logos_y_personajes_-4911618.jpg",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"Esta carta anulará todo lo que ocurra en este turno y hasta el final del próximo. Sólo puede jugarse una vez por partida, por lo que debes administrarla bien. Ten mucho cuidado de cuando la usas que es delicada(texto genérico)",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"Esta carta es una mala elección, la correcta habría sido la 3.",
      },
      {
       // Escriba el nombre de la respuesta de esta carta:
        "name":"Hackeo en masa",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":2,
        //  Imagen asociada a la carta
        "image":"https:/i11d.3djuegos.com/juegos/5919/_logos_y_personajes_/fotos/maestras/_logos_y_personajes_-4911618.jpg",
        //  Introduzca la respuesta que se asociará a la carta
        "feedback":"Esta no es la mejor opción, habría sido mejor la opción 3.",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "powerinfo":"Esta carta anulará todo lo que ocurra en este turno y hasta el final del próximo. Sólo puede jugarse una vez por partida, por lo que debes administrarla bien. Ten mucho cuidado de cuando la usas que es delicada(texto genérico)",
      },
      {
        // Escriba el nombre de la respuesta de esta carta:
        "name":"Hackeo en masa",
        //  Este será el poder de la carta. Si la respuesta que escribe es muy mala deberá tener menor poder que el de la carta enemiga.
        //  Si es la respuesta óptima, deberá tener más poder que la del enemigo.
        //  La tercera carta (e intermedia) puede ser mayor o menor, en función de la respuesta
        "power":3,
        //  Imagen asociada a la carta
        "image":"https:/i11d.3djuegos.com/juegos/5919/_logos_y_personajes_/fotos/maestras/_logos_y_personajes_-4911618.jpg",
        //  Introduzca la respuesta que se asociará a la carta
        "powerinfo":"Esta carta anulará todo lo que ocurra en este turno y hasta el final del próximo. Sólo puede jugarse una vez por partida, por lo que debes administrarla bien. Ten mucho cuidado de cuando la usas que es delicada(texto genérico)",
        //  Aquí deberá introducir una respuesta personalizada para la carta (o respuesta) que se mostrará una vez el alumno responda
        "feedback":"Esta sí es la mejor carta posible, enhorabuena!",
      },
      ],
    },
  ],
};
export default gameSettings;