import './App.css';
import logo from './img/logo.png'
import banner from './img/banner-image.png'
import about1 from './img/about-1.png'
import about2 from './img/about-2.png'
import team from './img/team-1.jpg'

function App() {
  return (
    <div className="App w-full">
      <div className="header z-10 w-full h-[80px] bg-white flex items-center justify-between px-10 fixed top-0 left-0">
        <div className="logo w-[100px] cursor-pointer">
          <img className="w-full" src={logo} />
        </div>
        <div className="navbar flex items-center">
          <div className="navbar-item hidden lg:flex text-xs font-bold">
            <p className="ml-7 cursor-pointer text-gray-700 hover:text-[#EB3656] transition-all">HOME</p>
            <p className="ml-7 cursor-pointer text-gray-700 hover:text-[#EB3656] transition-all">ABOUT</p>
            <p className="ml-7 cursor-pointer text-gray-700 hover:text-[#EB3656] transition-all">SERVICES</p>
            <p className="ml-7 cursor-pointer text-gray-700 hover:text-[#EB3656] transition-all">PROJECTS</p>
            <p className="ml-7 cursor-pointer text-gray-700 hover:text-[#EB3656] transition-all">TEAM</p>
            <p className="ml-7 cursor-pointer text-gray-700 hover:text-[#EB3656] transition-all">CONTACT</p>
          </div>
          <div className="call hidden sm:flex items-center ml-10 px-5 py-2.5 bg-[#EB3656] text-white border border-[#EB3656] transition-all shadow-sm shadow-[#EB3656] cursor-pointer hover:bg-white hover:text-[#EB3656]">
            <i className="fa-solid fa-square-phone text-xl"></i>
            <p className="ml-2 font-semibold">+0963 244 816</p>
          </div>
          <i className="fa-solid fa-bars ml-6 text-xl cursor-pointer lg:hidden"></i>
        </div>
      </div>

      {/* Baner */}
      <div className="baner flex justify-end relative mt-[80px] pt-2">
        <div className="desc w-[80%] sm:w-[65%] absolute top-1/2 left-3 sm:left-10 -translate-y-1/2">
          <h4 className="text-[#EB3656] font-semibold mb-3 text-lg">YOUR TRUSTED</h4>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight"><span className="text-[#EB3656]">Interior </span>Design Partner for Home or Office</h1>
          <h4 className="mt-3 md:mt-5 text-[#EB3656] font-semibold ml-12 cursor-pointer">GET A FREE QUOTE</h4>
        </div>
        <div className="baner-img w-[100%] sm:w-[55%] h-[500px] bg-red-50">
          <img className="w-full h-full object-cover " src={banner} />
        </div>
      </div>

      {/* About */}
      <div className="about w-full mt-10 flex flex-col lg:flex-row items-center lg:justify-center lg:w-10/12 lg:items-start lg:mx-auto">

        <div className="w-10/12 mt-5 relative lg:w-1/2">
          <div className="w-[60%] overflow-hidden">
            <img className='w-full object-cover' src={about1} />
          </div>
          <div className="w-[60%] overflow-hidden absolute top-1/2 right-0">
            <img className='w-full object-cover' src={about2} />
          </div>
          <p className="w-fit translate-y-1/2 absolute bottom-0 left-12
                        px-8 py-2 border-8 
                        border-white bg-[#EB3656] text-white 
                        text-md font-medium cursor-pointer
                        hover:text-[#EB3565] hover:bg-white hover:border-[#EB3656] transition-all
                        ">
            <span className="text-4xl font-bold">27 </span>
            EXPERIENCE
          </p>
        </div>

        <div className="w-full lg:w-1/2 px-5 mt-[160px] sm:px-10 sm:mt-[240px] lg:mt-5 mb-5">
          <h4 className="text-[#EB3656] font-semibold mb-2">ABOUT US</h4>
          <h2 className="font-bold text-2xl mb-8">REASONS TO CHOOSE</h2>
          <p className="text-md opacity-80 mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the
            1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
          <p className="w-fit py-2 px-5 border border-[#EB3556] bg-[#EB3656] text-white cursor-pointer font-semibold hover:text-[#EB3656] hover:bg-white hover:shadow-sm hover:shadow-[#EB3656]">LEARN MORE</p>
        </div>
      </div>

      {/* Service */}
      <div className="service mt-10 lg:mt-[80px] text-center">
        <h4 className="text-[#EB3656] text-md font-medium mb-2">OUR SERVICES</h4>
        <h1 className="text-2xl font-semibold mb-14">WHAT WE DO?</h1>

        <div className="list w-full flex flex-col items-center md:flex-row md:flex-wrap md:px-10">

          <div className="item w-10/12 sm:w-1/2 lg:w-1/3">
            <div className="group p-5 mb-10 hover:bg-[#EB3565] hover:text-white">
              <i className="fa-solid fa-paint-roller text-3xl text-[#EB3656] mb-4 group-hover:text-white"></i>
              <h4 className="text-xl font-semibold">Interior Design</h4>
              <p className="">Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam,
                id finibus risus arcu eget neque.</p>
            </div>
          </div>
          <div className="item w-10/12 sm:w-1/2 lg:w-1/3">
            <div className="group p-5 mb-10 hover:bg-[#EB3565] hover:text-white">
              <i className="fa-solid fa-paint-roller text-3xl text-[#EB3656] mb-4 group-hover:text-white"></i>
              <h4 className="text-xl font-semibold">Interior Design</h4>
              <p className="">Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam,
                id finibus risus arcu eget neque.</p>
            </div>
          </div>

          <div className="item w-10/12 sm:w-1/2 lg:w-1/3">
            <div className="group p-5 mb-10 hover:bg-[#EB3565] hover:text-white">
              <i className="fa-solid fa-paint-roller text-3xl text-[#EB3656] mb-4 group-hover:text-white"></i>
              <h4 className="text-xl font-semibold">Interior Design</h4>
              <p className="">Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam,
                id finibus risus arcu eget neque.</p>
            </div>
          </div>

          <div className="item w-10/12 sm:w-1/2 lg:w-1/3">
            <div className="group p-5 mb-10 hover:bg-[#EB3565] hover:text-white">
              <i className="fa-solid fa-paint-roller text-3xl text-[#EB3656] mb-4 group-hover:text-white"></i>
              <h4 className="text-xl font-semibold">Interior Design</h4>
              <p className="">Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam,
                id finibus risus arcu eget neque.</p>
            </div>
          </div>

          <div className="item w-10/12 sm:w-1/2 lg:w-1/3">
            <div className="group p-5 mb-10 hover:bg-[#EB3565] hover:text-white">
              <i className="fa-solid fa-paint-roller text-3xl text-[#EB3656] mb-4 group-hover:text-white"></i>
              <h4 className="text-xl font-semibold">Interior Design</h4>
              <p className="">Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam,
                id finibus risus arcu eget neque.</p>
            </div>
          </div>

          <div className="item w-10/12 sm:w-1/2 lg:w-1/3">
            <div className="group p-5 mb-10 hover:bg-[#EB3565] hover:text-white">
              <i className="fa-solid fa-paint-roller text-3xl text-[#EB3656] mb-4 group-hover:text-white"></i>
              <h4 className="text-xl font-semibold">Interior Design</h4>
              <p className="">Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam,
                id finibus risus arcu eget neque.</p>
            </div>
          </div>

        </div>

        {/* Team */}
        <div className="team text-center mt-20">
          <h4 className="text-[#EB3656] mb-4 font-semibold">MEET THE TEAM</h4>
          <h1 className="font-bold text-2xl mb-14">OUR EXPERT DESIGNER</h1>
          <div className="list w-full flex flex-col sm:flex-row sm:flex-wrap">

            <div className="item w-full px-2 mb-10 relative text-center group
                            sm:w-1/2 sm:px-5 lg:w-1/3">
              <div className="w-full pb-[100px] relativev z-0">
                <img className="w-full" src={team} />
              </div>
              <div className="info py-5 h-fit min-h-[100px] flex flex-col justify-center w-4/5 z-10
                            bg-white absolute left-1/2 bottom-0 -translate-x-1/2 transition-all
                              hover:shadow-lg hover:shadow-[#EB3656]">
                <h4 className="font-bold text-lg">Rob Hope</h4>
                <p className="text-sm opacity-70">CEO & Founder</p>
                <div className="social h-0 opacity-0 transition-all duration-500
                                group-hover:flex justify-center group-hover:pt-8 group-hover:h-20 
                                group-hover:opacity-100">
                  <i className="fa-brands fa-facebook-f mx-2 w-[30px] h-[30px] text-center leading-[30px] rounded-full bg-slate-300 hover:bg-[#EB3656] hover:text-white"></i>
                  <i className="fa-brands fa-twitter mx-2 w-[30px] h-[30px] text-center leading-[30px] rounded-full bg-slate-300 hover:bg-[#EB3656] hover:text-white"></i>
                  <i className="fa-brands fa-linkedin mx-2 w-[30px] h-[30px] text-center leading-[30px] rounded-full bg-slate-300 hover:bg-[#EB3656] hover:text-white"></i>
                </div>
              </div>
            </div>

            <div className="item w-full px-2 mb-10 relative text-center group
                            sm:w-1/2 sm:px-5 lg:w-1/3">
              <div className="w-full pb-[100px] relativev z-0">
                <img className="w-full" src={team} />
              </div>
              <div className="info py-5 h-fit min-h-[100px] flex flex-col justify-center w-4/5 z-10
                            bg-white absolute left-1/2 bottom-0 -translate-x-1/2 transition-all
                              hover:shadow-lg hover:shadow-[#EB3656]">
                <h4 className="font-bold text-lg">Rob Hope</h4>
                <p className="text-sm opacity-70">CEO & Founder</p>
                <div className="social h-0 opacity-0 transition-all duration-500
                                group-hover:flex justify-center group-hover:pt-8 group-hover:h-20 
                                group-hover:opacity-100">
                  <i className="fa-brands fa-facebook-f mx-2 w-[30px] h-[30px] text-center leading-[30px] rounded-full bg-slate-300 hover:bg-[#EB3656] hover:text-white"></i>
                  <i className="fa-brands fa-twitter mx-2 w-[30px] h-[30px] text-center leading-[30px] rounded-full bg-slate-300 hover:bg-[#EB3656] hover:text-white"></i>
                  <i className="fa-brands fa-linkedin mx-2 w-[30px] h-[30px] text-center leading-[30px] rounded-full bg-slate-300 hover:bg-[#EB3656] hover:text-white"></i>
                </div>
              </div>
            </div>

            <div className="item w-full px-2 mb-10 relative text-center group
                            sm:w-1/2 sm:px-5 lg:w-1/3">
              <div className="w-full pb-[100px] relativev z-0">
                <img className="w-full" src={team} />
              </div>
              <div className="info py-5 h-fit min-h-[100px] flex flex-col justify-center w-4/5 z-10
                            bg-white absolute left-1/2 bottom-0 -translate-x-1/2 transition-all
                              hover:shadow-lg hover:shadow-[#EB3656]">
                <h4 className="font-bold text-lg">Rob Hope</h4>
                <p className="text-sm opacity-70">CEO & Founder</p>
                <div className="social h-0 opacity-0 transition-all duration-500
                                group-hover:flex justify-center group-hover:pt-8 group-hover:h-20 
                                group-hover:opacity-100">
                  <i className="fa-brands fa-facebook-f mx-2 w-[30px] h-[30px] text-center leading-[30px] rounded-full bg-slate-300 hover:bg-[#EB3656] hover:text-white"></i>
                  <i className="fa-brands fa-twitter mx-2 w-[30px] h-[30px] text-center leading-[30px] rounded-full bg-slate-300 hover:bg-[#EB3656] hover:text-white"></i>
                  <i className="fa-brands fa-linkedin mx-2 w-[30px] h-[30px] text-center leading-[30px] rounded-full bg-slate-300 hover:bg-[#EB3656] hover:text-white"></i>
                </div>
              </div>
            </div>

            <div className="item w-full px-2 mb-10 relative text-center group
                            sm:w-1/2 sm:px-5 lg:w-1/3">
              <div className="w-full pb-[100px] relativev z-0">
                <img className="w-full" src={team} />
              </div>
              <div className="info py-5 h-fit min-h-[100px] flex flex-col justify-center w-4/5 z-10
                            bg-white absolute left-1/2 bottom-0 -translate-x-1/2 transition-all
                              hover:shadow-lg hover:shadow-[#EB3656]">
                <h4 className="font-bold text-lg">Rob Hope</h4>
                <p className="text-sm opacity-70">CEO & Founder</p>
                <div className="social h-0 opacity-0 transition-all duration-500
                                group-hover:flex justify-center group-hover:pt-8 group-hover:h-20 
                                group-hover:opacity-100">
                  <i className="fa-brands fa-facebook-f mx-2 w-[30px] h-[30px] text-center leading-[30px] rounded-full bg-slate-300 hover:bg-[#EB3656] hover:text-white"></i>
                  <i className="fa-brands fa-twitter mx-2 w-[30px] h-[30px] text-center leading-[30px] rounded-full bg-slate-300 hover:bg-[#EB3656] hover:text-white"></i>
                  <i className="fa-brands fa-linkedin mx-2 w-[30px] h-[30px] text-center leading-[30px] rounded-full bg-slate-300 hover:bg-[#EB3656] hover:text-white"></i>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="footer w-full mt-10 px-3 sm:px-0 sm:w-[80%] sm:mx-auto">
          <div className="contact">
            <div className="w-2/5 mb-4 cursor-pointer">
              <img className="" src={logo} />
            </div>
            <p className="w-full text-left text-sm mb-5 opacity-70">
              <span className="min-w-[30px] inline-block"><i class="fa-solid fa-phone"></i></span>
              +1880 123 456 789
            </p>
            <p className="w-full text-left text-sm mb-5 opacity-70">
              <span className="min-w-[30px] inline-block"><i class="fa-solid fa-envelope"></i></span>
              contact@yourmail.com
            </p>
            <p className="w-full text-left text-sm mb-5 opacity-70">
              <span className="min-w-[30px] inline-block"><i class="fa-solid fa-map-location"></i></span>
              1234 Avenue New York, US
            </p>
            <div className="social text-left mb-5">
              <i className="fa-brands fa-facebook-f mr-5 w-[30px] h-[30px] text-center leading-[30px] rounded-full bg-slate-300 hover:bg-[#EB3656] hover:text-white"></i>
              <i className="fa-brands fa-twitter mr-5 w-[30px] h-[30px] text-center leading-[30px] rounded-full bg-slate-300 hover:bg-[#EB3656] hover:text-white"></i>
              <i className="fa-brands fa-linkedin mr-5 w-[30px] h-[30px] text-center leading-[30px] rounded-full bg-slate-300 hover:bg-[#EB3656] hover:text-white"></i>
            </div>
          </div>

          <div className="sm:w-full sm:flex sm:flex-wrap">
            <div className="catalog mt-5 text-left sm:w-1/2 md:w-1/3 pr-5">
              <h4 className="title text-xl font-medium mb-3">Essential Links</h4>
              <p className="text-sm opacity-70 mb-2 hover:text-[#EB3565] cursor-pointer">About</p>
              <p className="text-sm opacity-70 mb-2 hover:text-[#EB3565] cursor-pointer">About</p>
              <p className="text-sm opacity-70 mb-2 hover:text-[#EB3565] cursor-pointer">About</p>
            </div>

            <div className="catalog mt-5 text-left sm:w-1/2 md:w-1/3 pr-5">
              <h4 className="title text-xl font-medium mb-3">Essential Links</h4>
              <p className="text-sm opacity-70 mb-2 hover:text-[#EB3565] cursor-pointer">About</p>
              <p className="text-sm opacity-70 mb-2 hover:text-[#EB3565] cursor-pointer">About</p>
            </div>

            <div className="catalog mt-5 text-left sm:w-1/2 md:w-1/3 pr-5">
              <h4 className="title text-xl font-medium mb-3">Essential Links</h4>
              <p className="text-sm opacity-70 mb-2 hover:text-[#EB3565] cursor-pointer">About</p>
              <p className="text-sm opacity-70 mb-2 hover:text-[#EB3565] cursor-pointer">About</p>
              <p className="text-sm opacity-70 mb-2 hover:text-[#EB3565] cursor-pointer">About</p>
            </div>
          </div>
          <p className="w-full py-3 font-medium text-sm">Copyright 2022 by YourCompany.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
