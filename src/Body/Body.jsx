import './Body.css'
import Imagen_3 from "../Pagina principal/Imagenes/Imagen3.png"
import Imagen_1 from "../Pagina principal/Imagenes/Imagen2.png"

export function Principal() {
    return (
        <div className="Cuerpo">
            <section className='Seccion1'>
                <div className="Titulo1"><h1>Mundo Terrariano</h1></div>
                <div className='SubCuerpo'>
                    <div className='Caja_Imagen2_Body'><img className='Imagen2_Body' src="https://terraria.org/static/media/wall_top_grass.e8d5ebf5.png" alt="" /></div>
                    <div className='Caja2'>
                        <div className='Subtitulo1'>Bienvenido a nuestro Fantastico Mundo</div>
                        <div className='Caja1'>
                            <p className='Texto1'>
                                ¡Saludos Terrarians! <br />
                                <br />Como hemos mencionado en los últimos meses, el equipo ha estado trabajando arduamente en una actualización para optimizar aún más Terraria para jugar en Steam Deck, 
                                incluido el rendimiento y los controles. Con Steam Deck, que se está enviando oficialmente a los jugadores a partir de hoy, 
                                ¡nos complace poder enviar esta actualización a todos justo a tiempo! Para los terrarios que no están jugando en Steam Deck en este momento, no se preocupen,
                                ya que también tenemos algunas mejoras de calidad de vida, equilibrio y correcciones de errores para ustedes. Sin más preámbulos, 
                                ¡vamos directo al grano! Tenga en cuenta que esta actualización también incluye una actualización de la aplicación Terraria Dedicated Server. 
                                Siempre puede encontrar la última versión de esta aplicación en la parte inferior de Terraria.org, pero también hemos incluido un enlace a continuación para la versión actual: <br />
                                <div className='CajaBoton_Version'><button className='Boton_Version'>Terraria(1.4.4.9)</button></div>
                            </p>
                        </div>
                        <div className='Caja3_Seccion1'>
                            <div className='Texto2'>
                            <h1>CONTROLES DE LA PLATAFORMA DE VAPOR TERRARIA.</h1><br />
                                <p>Más allá de las optimizaciones técnicas de rendimiento y demás, ¿a qué más nos referimos cuando decimos "optimizar Terraria para Steam Deck"? Bueno, un área en la que nos hemos centrado han sido los controles.
                                Cuando nos sentamos a disfrutar de Terraria en Steam Deck por primera vez, nos dimos cuenta inmediatamente de que necesitábamos hacer algunos ajustes para aprovechar al máximo todo lo que este nuevo sistema tiene para ofrecer. 
                                Más allá de los controles táctiles predeterminados que ofrece Steam Deck (que es posible que busquemos mejorar en el futuro), 
                                armamos el pequeño gráfico a continuación para mostrarle cómo hemos optimizado las cosas para todos los controles disponibles en Steam Deck:</p>
                                </div>
                                <div>
                                    <img className='Imagen8_Body' src={Imagen_1} alt="" />
                                </div>
                            </div>           
                    </div>

                    </div>
            </section>

             <section className='Seccion2'>
                <div className='SubCuerpo'>
                    <div className='Caja_Imagen2_Body'><img className='Imagen2_Body' src="https://terraria.org/static/media/wall_top_grass.e8d5ebf5.png" alt="" /></div>
                    <div className='Caja2'>
                        <div className="Titulo2"><h1>¡La actualización Terraria x Don't Starve Together ya está disponible!</h1></div>
                        <img src={Imagen_3} alt="" />
                        <div className='Subtitulo1'>Bienvenido a nuestro Fantastico Mundo</div>
                        <div className='Caja1'>
                            <p className='Texto1'>
                                Saludos Terrarians - ¡y bienvenidos a The Constant! <br />
                                <br />
                                Como revelamos hace apenas unas semanas, hemos estado trabajando arduamente en secreto con nuestros buenos amigos de Klei Entertainment para brindarles a los fanáticos de Terraria y Don't Starve Together una nueva actualización de contenido gratuita que integre fielmente partes de cada juego en el otro. 
                                ¿Cómo funcionará todo esto? ¿Qué tenemos exactamente reservado para nuestra parte del crossover? ¡Aventúrense, valientes terrarios,
                                y aprendan más sobre lo que los espera cuando The Constant colisione con el mundo de Terraria! <br />
                            </p>

                        </div>
                        <div className='Caja3_Seccion1'>
                            <div className='Texto2'>
                            <h1>UNA PALABRA DE INTRODUCCIÓN SOBRE TERRARIA x NO MORIR DE HAMBRE JUNTOS</h1><br />
                                <p>Más allá de las optimizaciones técnicas de rendimiento y demás, ¿a qué más nos referimos cuando decimos "optimizar Terraria para Steam Deck"? Bueno, un área en la que nos hemos centrado han sido los controles.
                                Cuando nos sentamos a disfrutar de Terraria en Steam Deck por primera vez, nos dimos cuenta inmediatamente de que necesitábamos hacer algunos ajustes para aprovechar al máximo todo lo que este nuevo sistema tiene para ofrecer. 
                                Más allá de los controles táctiles predeterminados que ofrece Steam Deck (que es posible que busquemos mejorar en el futuro), 
                                armamos el pequeño gráfico a continuación para mostrarle cómo hemos optimizado las cosas para todos los controles disponibles en Steam Deck:</p>
                                </div>
                            </div>           
                    </div>

                    </div>
                </section>

        </div>
    )
}