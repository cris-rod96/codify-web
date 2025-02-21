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
    <div className="w-full min-h-screen flex flex-col">
      {/* Header */}
      <header className="px-5 md:px-10 h-[70px] flex flex-row items-center justify-between bg-[#741D1D]">
        {/* Logo y nombre de la app */}
        <div className="flex items-center gap-2 md:gap-4">
          <img
            src="/logo_codify.png"
            alt="Logo"
            className="w-[60px] md:w-[80px] h-[60px] md:h-[80px]"
          />
          <h4 className="text-xl md:text-3xl text-white font-bold">
            Codify UTC
          </h4>
        </div>
      </header>

      <main className="w-[90%] md:w-[85%] mx-auto mt-5 md:mt-10 pb-[80px]">
        {/* HEADER NOMBRE Y LOGO */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="flex flex-col gap-1 w-full text-center md:text-left">
            <h2 className="text-3xl md:text-6xl font-semibold text-[#202124]">
              Codify UTC - Oficial
            </h2>

            <div className="mt-3 md:mt-5 flex flex-col">
              <h3 className="text-lg md:text-xl font-bold text-[#741D1D]">
                Cristhian Rodríguez
              </h3>
              <h5 className="text-[#94969A] text-sm md:text-base">
                Desarrollador
              </h5>
            </div>

            {/* Botones */}
            <div className="mt-5 flex flex-col md:flex-row items-center gap-3">
              <a
                download
                href="/codify.apk"
                className="w-full md:w-[200px] py-3 flex items-center justify-center bg-[#741D1D] text-white text-lg rounded-xl"
              >
                Descargar
              </a>
              <a
                href=""
                className="flex items-center gap-2 text-[#741D1D] font-semibold text-lg"
              >
                <TbPdf size={25} />
                Ver manual
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] bg-[#741D1D] rounded-3xl mt-5 md:mt-0">
            <img
              src="/logo_codify.png"
              alt="Logo de la aplicación"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="mt-8 md:mt-[50px] flex flex-col">
          {/* Descripcion */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <h3 className="text-xl md:text-2xl font-bold">
                Acerca de esta aplicación
              </h3>
              <MdOutlineKeyboardDoubleArrowRight />
            </div>

            <p className="w-full md:w-[85%] my-5 text-justify text-base md:text-lg text-black">
              Codify UTC es una innovadora aplicación diseñada para facilitar el
              aprendizaje de programación a través de la gamificación. Nuestro
              objetivo es hacer que el proceso de aprendizaje sea dinámico,
              interactivo y accesible para estudiantes de todos los niveles...
            </p>
          </div>

          {/* Slide */}
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
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
                  className="w-full h-auto max-h-[500px] rounded-lg object-cover"
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
