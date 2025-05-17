import { useState } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {

case 'home':
  return (
    <>
      <h1>Bienvenida, esta página recapitula nuestras primeras veces, espero que te guste. 
      <br></br>Se que el diseño no es mi punto fuerte, pero con suerte el contenido compensa lo feo jeje. 
      <br></br>Te amo Alba, eres maravillosa &lt;3</h1>
      <button onClick={() => setCurrentPage('meet')}>La primera vez que nos vimos</button>
      <button onClick={() => setCurrentPage('talk')}>La primera vez que hablamos</button>
      <button onClick={() => setCurrentPage('class')}>La primera vez que nos sentamos juntos</button>
      <button onClick={() => setCurrentPage('msg')}>La primera vez que nos escribimos</button>
      <button onClick={() => setCurrentPage('date')}>La primera vez que quedamos</button>
      <button onClick={() => setCurrentPage('couple')}>La primera vez que formalizamos la relación</button>
      <button onClick={() => setCurrentPage('encounter')}>La primera vez que quedamos como novios</button>
      <button onClick={() => setCurrentPage('kiss')}>La primera vez que nos besamos</button>
    </>
  );

      case 'meet':
        return (
          <>
          <div className='container'>
            <div>
              <h1 className="date">~10/09/2023</h1>
              <h2>La primera vez que nos vimos</h2>
              <h3>
                Cuando entré por la puerta de IFP, nervioso, había imaginado mil escenarios, como sería hablar con Sonia, como sería la entrevista, como se comportaría mi madre hablando con ella sobre las altas capacidades... 
                <br/><br/>Lo que nunca me imaginé, es que la siguiente persona para entrevistarse con Sonia, sería una chica, tan guapa como eres, que me pareció mayor que yo, y que me creó una sensación de pánico. 
                <br/><br/>Como sería estar en clase con personas mayores a mí? Sería capaz de actuar "normal" y no parecer un niño? Sería capaz de hablar contigo?
                <br/>Muchas preguntas y pocas respuestas, la única impresión que me pude llevar sin hablar contigo, es que eres preciosa, y que me encantaría hablar contigo. 
              </h3>
            </div>
            <div className="navigation-buttons">
              <button onClick={() => setCurrentPage('home')}>Volver al inicio</button>
              <button onClick={() => setCurrentPage('talk')}>Siguiente</button>
            </div>
          </div>
          </>
        );

      case 'talk':
        return (
          <>
          <div className='container'>
            <div>
              <h1 className="date">~15/09/2023</h1>
              <h2>La primera vez que hablamos</h2>
              <h3>
              Un día como otro cualquiera, salí de clase al descanso, con Oliver y Marcos, que entonces se sentaban a mi lado. Como de costumbre me comí la merienda que traía, una bolsa de mini Oreo, y cuando las acabé, me alejé un poco de ellos para tirar la bolsa.
                <br/><br/>Al girarme, me topé contigo, que ibas junto a Irene, preguntando por el patio a la gente donde vivían (cómo no, si no no serías tú), eso yo no lo sabía, pensé que veníais por mi (si, que egocéntrico) y viendo a Irene reírse, pensé que le gustaba y que tu la acompañabas por que le daba vergüenza. 
                <br/><br/>Sin embargo, la chica que me absorbía eras tú, desde el primer día me fijé en ti y ese día no fue la excepción. Nervioso os respondí esperando que ese momento incómodo pasara rápido.
                <br/><br/>Al volver a casa, se lo conté a Gustavo, y como no, siendo él, me preguntó, si una de vosotras me gustaba. Le reconocí que sí, que tu me atraías y que me gustaría hablar contigo, pero que no tenía el valor para hacerlo.
              </h3>
            </div>
            <div className="navigation-buttons">
              <button onClick={() => setCurrentPage('meet')}>Anterior</button>
              <button onClick={() => setCurrentPage('home')}>Volver al inicio</button>
              <button onClick={() => setCurrentPage('class')}>Siguiente</button>
          </div>
          </div>
          </>
        );

      case 'class':
        return (
          <>
          <div className='container'>
            <div>
              <h1 className="date">~01/~10/2023</h1>
              <h2>La primera vez que nos sentamos juntos</h2>
              <h3>
              Normalmente, los días que íbamos al taller, nos sentabamos Marcos, Oliver, Eulogio, y yo, en la mesa mas cercana al escritorio de Juan Carlos, pero un día, decidísteis cambiar de mesa, y os sentásteis donde se encontraban Oliver y Marcos.
              <br/><br/>En ese momento no supe que pensar, me pareció un poco incómodo que les hubiéseis "quitado" el sitio, pero poco a poco me iba acomodando más hablando contigo, me di cuenta de que realmente era lo mejor que me pudo haber pasado.
              <br/><br/>Cada día, nos reíamos más, y nos hacíamos más cercanos, poco a poco, salíamos juntos al Mercadona, por las mañanas nos juntábamos para hablar, y salíamos juntos a las paradas de bus.
              </h3>
            </div>
            <div className="navigation-buttons">
              <button onClick={() => setCurrentPage('talk')}>Anterior</button>
              <button onClick={() => setCurrentPage('home')}>Volver al inicio</button>
              <button onClick={() => setCurrentPage('msg')}>Siguiente</button>
          </div>
          </div>
          </>
        );

              case 'msg':
        return (
          <>
          <div className='container'>
            <div>
              <h1 className="date">23/01/2024</h1>
              <h2>La primera vez que nos escribimos</h2>
              <h3>
              El 23 de enero, le arrojé valor, empujado por Gustavo como no, y te mandé un mensaje privado. El contenido era lo de menos, tuve que buscar cualquier cosa relacionada con navajas en TikTok, que lo habíamos hablado con el grupo ese día, y así no sería tan raro
              <br/><br/>Me respondiste con un audio, lo cual me puso muy nervioso, pero, empujado una vez más por Gustavo, te respondí con otro. Y así, poco a poco, fuimos hablando más y más, cogiendo más confianza, hablando de cosas más profundas...
              <br/><br/>En cierto momento, Gustavo y yo empezamos a pensar en como te diría de salir, en un principio, pensamos en simular una conversación en la cual el me dejaba tirado, y que tenía dos entradas al cine de sobra. En fin, que desesparación la mía.
              
              </h3>
            </div>
            <div className="navigation-buttons">
              <button onClick={() => setCurrentPage('class')}>Anterior</button>
              <button onClick={() => setCurrentPage('home')}>Volver al inicio</button>
              <button onClick={() => setCurrentPage('date')}>Siguiente</button>
          </div>
          </div>
          </>
        );

        case 'date':
        return (
          <>
          <div className='container'>
            <div>
              <h1 className="date">08/03/2024</h1>
              <h2>La primera vez que quedamos</h2>
              <h3>
              El 8 de Marzo, durante una conversacion casual, te pregunté si tenías planes para esa tarde, y, como no los tenías, te propuse merendar un burrito, vaya idea la mía, de todas formas, no fue hasta una semana después que pudimos, por que tú estabas con Andrés... 
              <br/><br/>Cuando llegaste, tuve uno de los momentos más nerviosos de mi vida, yo estaba de llamada con Gustavo y tu me viste sin yo verte a tí y pues pensé que la había cagado de por vida jsjsj. Al final el día salio genial, te conté mi vida (desde el principio) y tú la tuya, y no se como desde ese momento no me di cuenta de que pues a lo mejor si te gustaba XD
              <br/><br/>Aquel día lo pasé increíble, me encantó hablar contigo y haber alcanzado esa "meta" contigo, y, aunque estuve nervioso el día entero, es uno de los días que recuerdo con mas nostalgia, precisamente por esa "duda" al mismo tiempo de esas ganas locas de tenerte.
              
              </h3>
            </div>
            <div className="navigation-buttons">
              <button onClick={() => setCurrentPage('msg')}>Anterior</button>
              <button onClick={() => setCurrentPage('home')}>Volver al inicio</button>
              <button onClick={() => setCurrentPage('couple')}>Siguiente</button>
          </div>
          </div>
          </>
        );

        case 'couple':
        return (
          <>
          <div className='container'>
            <div>
              <h1 className="date">29-30/03/2024</h1>
              <h2>La primera vez que formalizamos la relación</h2>
              <h3>
              A finales de Marzo, ambos estábamos de vacaciones, yo en Asturias tu en Bruselas, y yo no aguantaba más sin decirte mis sentimientos, (además de que quería intuir los tuyos...) así que poco a poco te iba intentando sacar algo, mientras los dos intententábamos no "delatarnos", y que el otro si que lo dijera jajsjs. 
              <br/><br/>El 30, después de pasar muchos nervios, llegamos a un punto donde no aguantabamos más, así que la conversación se fue haciendo más y más directa, hasta que llegamos a decir lo que sentíamos, y pudimos ambos relajarnos al saber que el otro sentía lo mismo.
              <br/><br/>Que paz, que alivio, que felicidad, extasis, que locura, que todo, fue maravilloso, aunque, al mismo tiempo, me arrepiento de ello todos los días, por no haber tenido el valor de haberlo dicho antes, y por supuesto, en persona...
              </h3>
            </div>
            <div className="navigation-buttons">
              <button onClick={() => setCurrentPage('date')}>Anterior</button>
              <button onClick={() => setCurrentPage('home')}>Volver al inicio</button>
              <button onClick={() => setCurrentPage('encounter')}>Siguiente</button>
          </div>
          </div>
          </>
        );

        case 'encounter':
        return (
          <>
          <div className='container'>
            <div>
              <h1 className="date">02/04/2024</h1>
              <h2>La primera vez que quedamos como novios</h2>
              <h3>
              El 2 de Abril, fue el primer día de clase después de aquella conversación, tú tenías médico, y llegaste tarde, cuando llegaste te faltaba una silla que había estado usando Virginia, así que fuiste a recogerla, y al volver, me lanzaste una miradita que me dejó completamente loco, una miradita de complicidad que nunca voy a olvidar, aunque, unas horas después, no pensaba mucho en ella, por que ese mismo día quedamos por la zona del Retiro.
              <br/><br/>Primero comimos en Ibiza, luego subimos Serrano, pasamos por Colón, y bajamos Recoletos, si no recuerdo mal, fue ese día que subimos al Ayuntamiento en Cibeles. Todo el rato yo iba haciendo el bobo, intentando no pensar en lo nervioso que estaba, y en las cosas que se podían esperar de mí.
              <br/><br/>Paseando por el lateral del Jardín Botánico, me agarraste del brazo, yo me congelé, y no supe reaccionar, acabamos sentándonos y yo pensé en echarte el brazo al hombro, pero no pude, estaba extremadamente nervioso, y al despedirnos, te envié un mensaje contándote todo lo que me arrepentía de no haber hecho lo que quería.
              </h3>
            </div>
            <div className="navigation-buttons">
              <button onClick={() => setCurrentPage('couple')}>Anterior</button>
              <button onClick={() => setCurrentPage('home')}>Volver al inicio</button>
              <button onClick={() => setCurrentPage('kiss')}>Siguiente</button>
          </div>
          </div>
          </>
        );

        case 'kiss':
        return (
          <>
          <div className='container'>
            <div>
              <h1 className="date">05/04/2024</h1>
              <h2>La primera vez que nos besamos</h2>
              <h3>
              Tres días después, el 5 de Abril, quedamos en el Jardín Botánico, para darnos el beso que no fui capaz de darte el día anterior. Nervioso y temblando como un flan, cogí el bus que me llevaría al Jardín Botánico, y llegué antes que tú, asi que decidí que te daría una sorpresa, pésima idea.
              <br/><br/>Después del paripé de intentar darte una sorpresa y cagarla estrepitosamente, nos dimos nuestro primer beso, y no se describir lo que sentí, no se trataba del beso, si no de estar por fin juntos, de ser algo más, y de tener esa confianza y esa conexión.
              <br/><br/>Tan intenso fue que tuve que sentarme, hablamos, sentimos, y nos reímos de nosotros mismos, fue un día maravilloso, despuúes de tanto tiempo, tanto deseo... Te quiero mi vida, te amo con todo mi corazón y quiero que esto no acabe nunca. 
              </h3>
            </div>
            <div className="navigation-buttons">
              <button onClick={() => setCurrentPage('encounter')}>Anterior</button>
              <button onClick={() => setCurrentPage('home')}>Volver al inicio</button>
          </div>
          </div>
          </>
        );

      default:
        return <h1>Página no encontrada</h1>;
    }
  };

  return <div>{renderPage()}</div>;
}

export default App;