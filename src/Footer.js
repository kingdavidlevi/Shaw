function Footer() {
    return (
        <div className="relative mt-7 w-full">
          <div className="footer-section pb-3 w-full lg:flex lg:justify-around   grid place-items-center bottom-0">
            <ul className="flex mt-5 lg:hidden mb-4 gap-3">
               <a href="https://www.shaw.ca/privacy-policy/" className="text-gray-300  text-base  underline"> <li>Privacy Policy</li></a>
               <div className="w-0.3 h-4 mt-1.5 bg-gray-300"></div>
                
               <a href="https://www.shaw.ca/terms-of-use/" className="text-gray-300    underline"> <li>Terms of Use</li></a>
               <div className="w-0.3 h-4 mt-1.5 bg-gray-300"></div>
                
               <a href="https://www.shaw.ca/accessibility/" className="text-gray-300    underline"> <li>Accessibility</li></a>
            
                
            </ul>
            <p className="text-gray-300 hidden lg:block text-xs">@2024 Shaw Communications. All Right Reserved.</p>
            <ul className="lg:flex mt-5 hidden  mb-4 gap-3">
               <a href="https://www.shaw.ca/privacy-policy/" className="text-gray-300  text-base  underline"> <li>Privacy Policy</li></a>
               <div className="w-0.3 h-4 mt-1.5 bg-gray-300"></div>
                
               <a href="https://www.shaw.ca/terms-of-use/" className="text-gray-300    underline"> <li>Terms of Use</li></a>
               <div className="w-0.3 h-4 mt-1.5 bg-gray-300"></div>
                
               <a href="https://www.shaw.ca/accessibility/" className="text-gray-300    underline"> <li>Accessibility</li></a>
            
                
            </ul>
        <p className="text-gray-300 lg:hidden text-xs">@2024 Shaw Communications. All Right Reserved.</p>
            </div>  
        </div>
    )
}
export default Footer