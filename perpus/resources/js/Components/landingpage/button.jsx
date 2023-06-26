export default function CButton(){
    return(
        <a href="#_" class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium transition duration-300 ease-out rounded-full hover:shadow-xl group hover:ring-1 hover:ring-green-500">
            <span class="absolute inset-0 w-full h-full group-hover:bg-gradient-to-br from-blue-400 to-green-400"></span>
            <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-90 translate-x-24 group-hover:bg-green-500 rounded-full opacity-80 group-hover:rotate-45 ease"></span>
            <span class="relative text-black group-hover:text-white">Beranda</span>
        </a>

    )
}
