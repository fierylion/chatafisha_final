import React from 'react'
import { Text } from 'components'
import { v4 as uuidv4 } from 'uuid'
import BlogDescription from 'components/BlogDescription'
const NewsGrid = ({blogs, pages, setCurrentPage, currentPage, navigateToSinglePage, getDate, currentBlogSet, capitalizeFirstLetter}) => {
  const handlePageChange = (page) => {
    setCurrentPage(page);

  }
  const contentTitleRatio = (contentMulitple, contentLength, headerLength) => { // give the content length avoiding css breaking
    if (headerLength>15) {
      const titleExceed = headerLength - 15
      return 299 - (contentMulitple * titleExceed)
    }
    return 299

  }
  const wrapPages = (page) => {
    if (page > pages) {
      return pages
    }
    if (page < 1) {
      return 1
    }
    return page
  
  }
 return (
   <section className='container-fluid'>
     <div className='row d-flex justify-content-center '>
       {blogs.map((card, ind) => {
         return (
           <div className={`m-3  col-md-4 col-sm-12 single-blog p-3 shadow`} key={uuidv4()}>
             <div className=''>
               <img
                 src={
                  card.img
                 }
                 className='card_img rounded'
                 alt={card.title}
               />
               <div className='my-3'>
                 <Text
                   className='font-bold text-dark text-left text-xl w-full text-capitalize'
                   variant='h4'
                 >
                   {card.title && capitalizeFirstLetter(card.title.substring(0, 60))+ (card.title.length>15 ? '...':'')}
                 </Text>
                 <div className='blog-content w-100 text-justify'>
                   
                     {card.content && (
                       <BlogDescription
                         content={capitalizeFirstLetter(card.content.substring(
                           0,
                           200
                         ) )+ (card.content.length > 200 ? '...' : '')}
                       />
                     )}
                     <span
                       className='text-primary page_links '
                       onClick={() => navigateToSinglePage(card)}
                     >
                       Read More...
                     </span>
                   
                 </div>
                 <hr />
                 <div className='d-flex flex-row justify-content-between w-100'>
                     <div className=''>
                       <div className='profile-photo mb-2'></div>
                       <small className='text-primary '>
                         By John Doe
                       </small>
                     </div>
                     <small className=' mb-3 text-muted d-block text-end col-sm-6'>
                       {getDate()}
                     </small>
                   
                 </div>
               </div>
             </div>
             {/* <div
               className='card p-5'
               style={{ width: '18rem', height: '30rem' }}
             >
               <img
                 src={
                   'https://service-chatafishabackend.onrender.com/' + card.img
                 }
                 className='card_img'
                 alt={card.title}
               />
               <div
                 className='card-title mt-4 page_links'
                 onClick={() => navigateToSinglePage(card)}
               >
                 <Text
                   className='font-bold text-dark text-left text-xl w-full'
                   variant='h4'
                 >
                   {card.title}
                 </Text>
               </div>
               <div className='card-body'>
                 <Text
                   className='text-white pt-1 text-left text-xs '
                   variant='body2'
                 >
                   {card.content && (
                     <BlogDescription
                       content={card.content.substring(
                         0,
                         contentTitleRatio(
                           5,
                           card.content.length,
                           card.title.length
                         )
                       )}
                     />
                   )}
                   <span
                     className='text-primary page_links '
                     onClick={() => navigateToSinglePage(card)}
                   >
                     Read More...
                   </span>
                 </Text>
               </div>
               <div className='card-footer'>
                 <div className='row'>
                   <div className='col-md-6 '>
                     <div className='profile-photo'></div>
                     <small className='text-primary profile-name'>
                       By John Doe
                     </small>
                   </div>
                   <small className='mb-3 text-muted col-md-6'>
                     {getDate()}
                   </small>
                 </div>
               </div>
             </div> */}
           </div>
         )
       })}
     </div>
     <div className='page-pagination'>
       <nav aria-label='Page navigation example'>
         <ul className='pagination'>
           <li
             className={`page-item ${currentPage === 1 && 'disabled'}`}
             onClick={() => {
               handlePageChange(wrapPages(currentPage - 1))
             }}
           >
             <a className='page-link' >
               Previous
             </a>
           </li>
           {Array(pages).fill(0).map((page, index) => {
             return (
               <li
                 className={`page-item ${currentPage === index+1 && 'active'}`}
                 onClick={() => handlePageChange(index+1)}
               >
                 <a className='page-link'>
                   {index+1}
                 </a>
               </li>
             )
           })}
           <li
             className={`page-item ${currentPage === pages && 'disabled'}`}
             onClick={() => {
               handlePageChange(wrapPages(currentPage + 1))
             }}
           >
             <a className='page-link'>
               Next
             </a>
           </li>
         </ul>
       </nav>
     </div>
   </section>
 )
}

export default NewsGrid