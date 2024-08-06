function Footer() {
    return (
        <section>
        <div className="relative mt-7 w-full">
          <div className="footer-section lg:pb-6 lg:items-center lg:pt-6 pb-3 w-full lg:flex lg:justify-around   grid place-items-center bottom-0">
            <ul className="flex mt-5 lg:hidden mb-4 gap-3">
               <a href="https://www.shaw.ca/privacy-policy/" className="text-gray-300  text-base  underline"> <li>Privacy Policy</li></a>
               <div className="w-0.3 h-4 mt-1.5 bg-gray-300"></div>
                
               <a href="https://www.shaw.ca/terms-of-use/" className="text-gray-300    underline"> <li>Terms of Use</li></a>
               <div className="w-0.3 h-4 mt-1.5 bg-gray-300"></div>
                
               <a href="https://www.shaw.ca/accessibility/" className="text-gray-300    underline"> <li>Accessibility</li></a>
            
                
            </ul>
            <p className="text-gray-300 hidden lg:block text-xs">@2024 Shaw Communications. All Right Reserved.</p>
            <ul className="lg:flex  hidden   gap-3">
               <a href="https://www.shaw.ca/privacy-policy/" className="text-gray-300  text-base  underline"> <li>Privacy Policy</li></a>
               <div className="w-0.3 h-4 mt-1.5 bg-gray-300"></div>
                
               <a href="https://www.shaw.ca/terms-of-use/" className="text-gray-300    underline"> <li>Terms of Use</li></a>
               <div className="w-0.3 h-4 mt-1.5 bg-gray-300"></div>
                
               <a href="https://www.shaw.ca/accessibility/" className="text-gray-300    underline"> <li>Accessibility</li></a>
            
                
            </ul>
        <p className="text-gray-300 lg:hidden text-xs">@2024 Shaw Communications. All Right Reserved.</p>
            </div>

        </div>
         <section className="overflow-hidden  w-full ">
        <div className="-right-48 slide-div fixed  bottom-3"><iframe title="reCAPTCHA" width="256" height="60" role="presentation" name="a-47j7q79irjah" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lfr35QUAAAAAKLqCgXCOFHoWmGS95CyzFBFEjWr&amp;co=aHR0cHM6Ly93ZWJtYWlsLnNoYXcuY2E6NDQz&amp;hl=en&amp;v=hfUfsXWZFeg83qqxrK27GB8P&amp;size=invisible&amp;cb=l6wwibemofqg"></iframe></div>
        </section>
        </section>
    )
}
export default Footer