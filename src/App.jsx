import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'
import { TbPdf } from 'react-icons/tb'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

const images = [
  '/01.jpeg',
  '/02.jpeg',
  '/03.jpeg',
  '/04.jpeg',
  '/05.jpeg',
  '/06.jpeg',
  '/07.jpeg',
  '/08.jpeg',
  '/09.jpeg',
  '/10.jpeg',
  '/11.jpeg',
]
const App = () => {
  return (
    <div className="w-full h-screen flex flex-col ">
      {/* Header */}
      <header className="px-10 h-[70px] flex flex-row items-center justify-between bg-[#741D1D]">
        {/* Logo y nombre de la app */}
        <div className="flex flex-row items-center">
          <img src="/logo_codify.png" alt="" className="w-[80px] h-[80px]" />
          <h4 className="text-3xl text-white font-bold">Codify UTC</h4>
        </div>
      </header>

      <main className="w-[85%] mx-auto mt-10 pb-[100px]">
        {/* HEADER NOMBRE Y LOGO */}
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col gap-1 w-full">
            <h2 className="text-6xl font-semibold text-[#202124]">
              Codify UTC - Oficial
            </h2>

            <div className="mt-5 flex flex-col">
              <h3 className="text-xl font-bold text-[#741D1D]">
                Cristhian Rodríguez
              </h3>
              <h5 className="text-[#94969A]">Desarrollador</h5>
            </div>

            {/* Botones */}
            <div className="mt-5 flex flex-row items-center gap-2">
              <a
                download
                href="/codify-utc.apk"
                className="w-[200px] py-3 flex flex-row items-center justify-center bg-[#741D1D] text-lg text-white rounded-xl mr-5"
              >
                Descargar
              </a>
              <a
                href=""
                className="flex flex-row items-center justify-between gap-2 text-[#741D1D] font-semibold text-lg"
              >
                <TbPdf size={30} />
                Ver manual
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className="w-[200px] h-[200px] relative bg-[#741D1D] rounded-3xl">
            <img
              src="/logo_codify.png"
              alt="Logo de la aplicación"
              className="absolute w-full h-full"
            />
          </div>
        </div>

        <div className="mt-[50px] flex flex-col">
          {/* Descripcion */}
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-3">
              <h3 className="text-2xl font-bold">Acerca de esta aplicación</h3>
              <MdOutlineKeyboardDoubleArrowRight />
            </div>

            <p className="w-[1200px] my-5 text-justify text-lg text-black">
              Codify UTC es una innovadora aplicación diseñada para facilitar el
              aprendizaje de programación a través de la gamificación. Nuestro
              objetivo es hacer que el proceso de aprendizaje sea dinámico,
              interactivo y accesible para estudiantes de todos los niveles. Con
              Codify UTC, los usuarios podrán reforzar sus conocimientos
              mediante quizzes, rompecabezas y desafíos de lógica, promoviendo
              un aprendizaje basado en la práctica y la resolución de problemas.
              Cada actividad está diseñada para desarrollar habilidades clave en
              lógica computacional y pensamiento algorítmico. Además, la
              plataforma permite a los docentes crear sus propios cursos y
              clases, proporcionando una experiencia personalizada para sus
              estudiantes. Para garantizar un acceso controlado, cada curso está
              protegido por un código de inscripción, el cual es compartido por
              el docente con sus alumnos. Nuestra misión es transformar la
              enseñanza de la programación, convirtiéndola en una experiencia
              divertida y efectiva. Queremos que tanto estudiantes como docentes
              encuentren en Codify UTC una herramienta poderosa para desarrollar
              habilidades en programación de manera práctica e intuitiva.
            </p>
          </div>
          {/* SLide */}
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3600, disableOnInteraction: false }}
            className="w-full max-w-lg mt-5"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full rounded-lg h-[1000px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </div>
  )
}

export default App
