import React from 'react'
import cart_reviewimg1 from '../unisole/Images/cart_img_review1.jpg'
import cart_reviewimg2 from '../unisole/Images/cart_img_review2.jpg'
import cart_reviewimg3 from '../unisole/Images/cart_img_review3.jpg'

const Cartreview = () => {
    return (
        <div>
            <div class="card mb-4 m-0 w-100">
                <div class="card-body">
                    {/* <form class="row mb-4">
                        <div class="col-xl-7 col-lg-6 col-md-4 col-12 mb-2 mb-lg-0">
                            <select class="form-select">
                                <option value="">ALL</option>
                                <option value="How to easily create a website with WordPress">
                                    How to easily create a website with WordPress
                                </option>
                                <option value="Getting started - Grunt: The JavaScript Task...">
                                    Getting started - Grunt: The JavaScript Task...
                                </option>
                                <option value="Getting started - Vue js: The JavaScript Task...">
                                    Getting started - Vue js: The JavaScript Task...
                                </option>
                            </select>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-4 col-12 mb-2 mb-lg-0">
                            <select class="form-select">
                                <option value="">Rating</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-4 col-12 mb-2 mb-lg-0">
                            <select class="form-select">
                                <option value="">Sort</option>
                                <option value="Newest">Newest</option>
                                <option value="Oldest">Oldest</option>
                            </select>
                        </div>
                    </form> */}
                    <ul class="list-group list-group-flush border-top">
                        <li class="list-group-item px-0 py-4">
                            <div class="d-flex">
                                <img src={cart_reviewimg1} alt="" style={{width:"100px",height:"100px"}}
                                    class="rounded-circle avatar-lg" />
                                <div class="ms-3 mt-2">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <h4 class="mb-0">Eleanor Pena</h4>
                                            <span class=" fs-6">2
                                                hour ago</span>
                                        </div>
                                        <div>
                                            <a href="#" data-bs-toggle="tooltip" data-placement="top"
                                                title="Report Abuse"><i class="fe fe-flag"></i></a>
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                        <span class="me-1 fs-6 align-text-bottom">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </span>
                                        <span class="me-1">for</span>
                                        <span class="h5">this product</span>
                                        <p class="mt-2">
                                            As a former avid runner with over a decade of experience with running gear, I tested On’s this shoes running shoes for two months and this is best product ever.
                                        </p>
                                        <a href="#" class="btn btn-outline-secondary btn-sm">Respond</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item px-0 py-4">
                            <div class="d-flex">
                                <img src={cart_reviewimg3} alt="" style={{width:"100px",height:"100px"}}
                                    class="rounded-circle avatar-lg" />
                                <div class="ms-3 mt-2">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <h4 class="mb-0">Jenny Wilson</h4>
                                            <span class=" fs-6">2
                                                hour ago</span>
                                        </div>
                                        <div>
                                            <a href="#" data-bs-toggle="tooltip" data-placement="top"
                                                title="Report Abuse"><i class="fe fe-flag"></i></a>
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                        <span class="me-1 fs-6 align-text-bottom">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </span>
                                        <span class="me-1">for</span>
                                        <span class="h5">this product</span>
                                        <p class="mt-2">
                                        As a former avid runner with over a decade of experience with running gear, I tested On’s this shoes running shoes for two months and this is best product ever.
                                        </p>
                                        <a href="#" class="btn btn-outline-secondary btn-sm">Respond</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item px-0 py-4">
                            <div class="d-flex">
                                <img src={cart_reviewimg2} alt="" style={{width:"100px",height:"100px"}}
                                    class="rounded-circle avatar-lg" />
                                <div class="ms-3 mt-2">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div>
                                            <h4 class="mb-0">Brooklyn Simmons</h4>
                                            <span class=" fs-6">2
                                                hour ago</span>
                                        </div>
                                        <div>
                                            <a href="#" data-bs-toggle="tooltip" data-placement="top"
                                                title="Report Abuse"><i class="fe fe-flag"></i></a>
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                        <span class="me-1 fs-6 align-text-bottom">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </span>
                                        <span class="me-1">for</span>
                                        <span class="h5">this product</span>
                                        <p class="mt-2">
                                            As a former avid runner with over a decade of experience with running gear, I tested On’s this shoes running shoes for two months and this is best product ever.
                                        </p>
                                        <a href="#" class="btn btn-outline-secondary btn-sm">Respond</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cartreview
