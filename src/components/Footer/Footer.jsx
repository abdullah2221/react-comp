import React from 'react'

function Footer() {
    const now = new Date()
    const year = now.getFullYear()
  return (
    <footer className='bg-dark pt-2'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className='text-center text-white'>
                        &copy; {year}. All Rights are reserved. 
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer