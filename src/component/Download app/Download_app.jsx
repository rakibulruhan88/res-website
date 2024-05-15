import { assets } from "../../assets/assets"
import './Download_app'
function Download_app() {
  return (
    <>
        <div>
        {/* <hr className="w-15 border-l-amber-500 text-black" /> */}
        <footer className="bg-white" id="download-app">
  <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
    <div className="text-center">
      <h2 className="text-2xl font-bold text-orange-600 sm:text-5xl">For Better Experiance for download</h2>


      <a
        href="#"
        className="download-app mt-8  px-12 py-3 grid place-items-center gap-4"
      >
        <img className="play_Store" src={assets.play_store} alt="" />
        <span className="text-3xl text-orange-500">&</span>
        <img src={assets.app_store} alt="" />
      </a>
    </div>

    <div
      className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24"
    >
    

    
    </div>
  </div>
</footer>
        </div>
    </>
  )
}

export default Download_app
