import { useState } from "react";
import logo from "./img/logo.jpg";
import "./App.css";

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="App" id="Home">
      {/* navbar section */}
      <nav className="relative flex flex-wrap px-2 py-2 items-center justify-between bg-white-500 my-1">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex items-center justify-center font-mono">
              <img className="h-10 w-10 mx-2" src={logo} alt="logo" />
              <h1 className="text-1xl">#SangitaMehendiArt</h1>
            </div>
            <button
              className="text-black border-2 hover:bg-gray-400 hover:text-white bg-gray-300 cursor-pointer ml-2 text-lg leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              Menu
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center justify-center text-2xl mt-1" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex justify-center items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#images-1"
                >
                  <span className="ml-2">Gallery</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex justify-center items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#aboutus"
                >
                  <span className="ml-2">About us</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex justify-center items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#contact"
                >
                  <span className="ml-2">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* hero section */}
      <section id="hero_section">
        {/* <!-- Background image --> */}
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover mb-5"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')",
            height: "400px",
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 md:px-12">
                <h1 className="text-5xl font-bold mt-0 mb-6">Heading</h1>
                <h3 className="text-3xl font-bold mb-8">Subeading</h3>
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* galary content section */}
      <section id="content section" className="my-12 py-12">
        <div className="container mx-auto px-12">
          <h1 className="text-3xl text-center text-gray-600">
            This is dummy content
          </h1>
          <p className="text-2xl text-center text-gray-500">
            Responsive cards built with Tailwind CSS. Card is a content
            containers with an extensible option for headers, footers, images,
            and a wide variety of content.
          </p>
        </div>
      </section>

      {/* galary or images section */}
      <section id="images-1" className="overflow-hidden text-gray-700 mt-0">
        <div className="text-gray-700 my-4">
          <h2 className="text-4xl text-center">Gallery</h2>
        </div>
        <div className="container px-5 py-1 mx-auto lg:pt-22 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* galary or images section */}
      <section id="images-2" className="overflow-hidden text-gray-700 mt-0">
        <div className="container px-5 py-1 mx-auto lg:pt-22 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* galary content section */}
      <section id="content section" className="my-12 py-12">
        <div className="container mx-auto px-12">
          <h1 className="text-3xl text-center text-gray-600">
            This is dummy content
          </h1>
          <p className="text-2xl text-center text-gray-500">
            Responsive cards built with Tailwind CSS. Card is a content
            containers with an extensible option for headers, footers, images,
            and a wide variety of content.
          </p>
        </div>
      </section>

      {/* section 2 mehendi types and details */}
      <section id="m-types">
        <div className="text-gray-700 my-10">
          <h2 className="text-4xl text-center">Mehendi events</h2>
        </div>
        <div className="container my-23 pt-5 mx-auto">
          <section className="mb-14 text-gray-800 text-center">
            {/* collection 1 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-x-12">
              {/* card 1 */}
              <div className="mb-6 m-2 lg:mb-0">
                <div>
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbootstrap.com/img/new/standard/city/018.jpg"
                      className="w-full"
                      alt="Louvre"
                    />
                    <a href="#!">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>

                  <h5 className="text-lg font-bold mb-3">
                    Welcome to California
                  </h5>
                  <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="currentColor"
                        d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                      />
                    </svg>
                    Travels
                  </div>
                  <p className="text-gray-500 mb-6">
                    <small>
                      Published <u>13.01.2022</u> by
                      <a href="google" className="text-gray-900">
                        Anna Maria Doe
                      </a>
                    </small>
                  </p>
                  <p className="text-gray-500">
                    Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                    placerat vulputate. Ut vulputate est non quam dignissim
                    elementum. Donec a ullamcorper diam.
                  </p>
                </div>
              </div>
              {/* card 2 */}
              <div className="mb-6 m-2 lg:mb-0">
                <div>
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbootstrap.com/img/new/standard/city/032.jpg"
                      className="w-full"
                      alt="Louvre"
                    />
                    <a href="#!">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>

                  <h5 className="text-lg font-bold mb-3">
                    Exhibition in Paris
                  </h5>
                  <div className="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
                      />
                    </svg>
                    Art
                  </div>
                  <p className="text-gray-500 mb-6">
                    <small>
                      Published <u>12.01.2022</u> by
                      <a href="google" className="text-gray-900">
                        Halley Frank
                      </a>
                    </small>
                  </p>
                  <p className="text-gray-500">
                    Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet
                    diam orci, nec ornare metus semper sed. Integer volutpat
                    ornare erat sit amet rutrum.
                  </p>
                </div>
              </div>
              {/* card 3 */}
              <div className="m-2 mb-0">
                <div>
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbootstrap.com/img/new/standard/city/059.jpg"
                      className="w-full"
                      alt="Louvre"
                    />
                    <a href="#!">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>

                  <h5 className="text-lg font-bold mb-3">Stock market boom</h5>
                  <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"
                      />
                    </svg>
                    Business
                  </div>
                  <p className="text-gray-500 mb-6">
                    <small>
                      Published <u>10.01.2022</u> by
                      <a href="google.com" className="text-gray-900">
                        Joe Svan
                      </a>
                    </small>
                  </p>
                  <p className="text-gray-500">
                    Curabitur tristique, mi a mollis sagittis, metus felis
                    mattis arcu, non vehicula nisl dui quis diam. Mauris ut
                    risus eget massa volutpat feugiat. Donec.
                  </p>
                </div>
              </div>
              {/* card 4 */}
              <div className="mb-0 m-2 ">
                <div>
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbootstrap.com/img/new/standard/city/018.jpg"
                      className="w-full"
                      alt="Louvre"
                    />
                    <a href="#!">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>

                  <h5 className="text-lg font-bold mb-3">
                    Welcome to California
                  </h5>
                  <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="currentColor"
                        d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                      />
                    </svg>
                    Travels
                  </div>
                  <p className="text-gray-500 mb-6">
                    <small>
                      Published <u>13.01.2022</u> by
                      <a href="google" className="text-gray-900">
                        Anna Maria Doe
                      </a>
                    </small>
                  </p>
                  <p className="text-gray-500">
                    Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                    placerat vulputate. Ut vulputate est non quam dignissim
                    elementum. Donec a ullamcorper diam.
                  </p>
                </div>
              </div>
            </div>
            {/* collection 2 */}
            <div className="grid mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-x-12">
              {/* card 1 */}
              <div className="mb-6 m-2 lg:mb-0">
                <div>
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbootstrap.com/img/new/standard/city/018.jpg"
                      className="w-full"
                      alt="Louvre"
                    />
                    <a href="#!">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>

                  <h5 className="text-lg font-bold mb-3">
                    Welcome to California
                  </h5>
                  <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="currentColor"
                        d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                      />
                    </svg>
                    Travels
                  </div>
                  <p className="text-gray-500 mb-6">
                    <small>
                      Published <u>13.01.2022</u> by
                      <a href="google" className="text-gray-900">
                        Anna Maria Doe
                      </a>
                    </small>
                  </p>
                  <p className="text-gray-500">
                    Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                    placerat vulputate. Ut vulputate est non quam dignissim
                    elementum. Donec a ullamcorper diam.
                  </p>
                </div>
              </div>
              {/* card 2 */}
              <div className="mb-6 m-2 lg:mb-0">
                <div>
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbootstrap.com/img/new/standard/city/032.jpg"
                      className="w-full"
                      alt="Louvre"
                    />
                    <a href="#!">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>

                  <h5 className="text-lg font-bold mb-3">
                    Exhibition in Paris
                  </h5>
                  <div className="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
                      />
                    </svg>
                    Art
                  </div>
                  <p className="text-gray-500 mb-6">
                    <small>
                      Published <u>12.01.2022</u> by
                      <a href="google" className="text-gray-900">
                        Halley Frank
                      </a>
                    </small>
                  </p>
                  <p className="text-gray-500">
                    Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet
                    diam orci, nec ornare metus semper sed. Integer volutpat
                    ornare erat sit amet rutrum.
                  </p>
                </div>
              </div>
              {/* card 3 */}
              <div className="m-2 mb-0">
                <div>
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbootstrap.com/img/new/standard/city/059.jpg"
                      className="w-full"
                      alt="Louvre"
                    />
                    <a href="#!">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>

                  <h5 className="text-lg font-bold mb-3">Stock market boom</h5>
                  <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z"
                      />
                    </svg>
                    Business
                  </div>
                  <p className="text-gray-500 mb-6">
                    <small>
                      Published <u>10.01.2022</u> by
                      <a href="google.com" className="text-gray-900">
                        Joe Svan
                      </a>
                    </small>
                  </p>
                  <p className="text-gray-500">
                    Curabitur tristique, mi a mollis sagittis, metus felis
                    mattis arcu, non vehicula nisl dui quis diam. Mauris ut
                    risus eget massa volutpat feugiat. Donec.
                  </p>
                </div>
              </div>
              {/* card 4 */}
              <div className="mb-0 m-2 ">
                <div>
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbootstrap.com/img/new/standard/city/018.jpg"
                      className="w-full"
                      alt="Louvre"
                    />
                    <a href="#!">
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>

                  <h5 className="text-lg font-bold mb-3">
                    Welcome to California
                  </h5>
                  <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="currentColor"
                        d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                      />
                    </svg>
                    Travels
                  </div>
                  <p className="text-gray-500 mb-6">
                    <small>
                      Published <u>13.01.2022</u> by
                      <a href="google" className="text-gray-900">
                        Anna Maria Doe
                      </a>
                    </small>
                  </p>
                  <p className="text-gray-500">
                    Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                    placerat vulputate. Ut vulputate est non quam dignissim
                    elementum. Donec a ullamcorper diam.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* about section */}
      <section id="aboutus">
        <div className="text-gray-700 my-8">
          <h2 className="text-4xl text-center">About us</h2>
        </div>
        <div className="text-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
            className="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
          <h5 className="text-xl font-medium leading-tight mb-2">
            Sangita Gohil
          </h5>
          <p className="text-gray-500">Mehendi designer</p>
        </div>
        <div className="p-5">
          <p className="flex pt-5 m-4">
            Section 1.10.33 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC "At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti atque
            corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident, similique sunt in culpa qui officia
            deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
            quidem rerum facilis est et expedita distinctio. Nam libero tempore,
            cum soluta nobis est eligendi optio cumque nihil impedit quo minus
            id quod maxime placeat facere possimus, omnis voluptas assumenda
            est, omnis dolor repellendus. Temporibus autem quibusdam et aut
            officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat."
          </p>
        </div>
      </section>

      {/* footer */}
      <footer
        id="footer"
        className="text-center lg:text-left bg-gray-100 text-gray-600"
      >
        <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
          <div className="mr-12 hidden lg:block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="flex justify-center">
            <a href="#!" className="mr-6 text-gray-600">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                className="w-2.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </a>
            <a href="#!" className="mr-6 text-gray-600">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                ></path>
              </svg>
            </a>
            <a href="#!" className="mr-6 text-gray-600">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                className="w-3.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
            </a>
            <a href="#!" className="mr-6 text-gray-600">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                className="w-3.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </a>
            <a href="#!" className="mr-6 text-gray-600">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin-in"
                className="w-3.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>
            <a href="#!" className="text-gray-600">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="">
              <h6
                className="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          "
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="cubes"
                  className="w-4 mr-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
                  ></path>
                </svg>
                #SangitaMehendiArt
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Types of mehendi designs
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  Mehendi 1
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  Mehendi 2
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-gray-600">
                  Mehendi 3
                </a>
              </p>
              <p>
                <a href="#!" className="text-gray-600">
                  Mehendi 4
                </a>
              </p>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Useful links
              </h6>
              <p className="mb-4">
                <a href="#Home" className="text-gray-600">
                  Home
                </a>
              </p>
              <p className="mb-4">
                <a href="#images-1" className="text-gray-600">
                  Gallery
                </a>
              </p>
              <p className="mb-4">
                <a href="#m-types" className="text-gray-600">
                  Types of mehendi
                </a>
              </p>
              <p>
                <a href="#aboutus" className="text-gray-600">
                  About us
                </a>
              </p>
            </div>
            <div className="" id="contact">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Contact
              </h6>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="home"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                  ></path>
                </svg>
                <a href="https://goo.gl/maps/K6eknLAyx7U4UdbM8">
                  Mumbai, Maharashtra 400057
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  ></path>
                </svg>
                <a href="mailto:sangita@example.com">Sangita@example.com</a>
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="phone"
                  className="w-4 mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                  ></path>
                </svg>
                <a href="tel:+918888888888">+91 8888888888</a>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center p-6 bg-gray-200">
          <span>© 2022 Copyright:</span>
          <a
            className="text-gray-600 font-semibold"
            href="https://tailwind-elements.com/"
          >
            Mohit Gohil
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
