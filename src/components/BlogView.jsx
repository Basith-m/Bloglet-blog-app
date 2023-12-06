import React from 'react'
import profileImg from '../Assets/profile-img.png'
import './BlogView.css'
import { Link } from 'react-router-dom'


function BlogView({ insideMyPost }) {
    return (
        <>
            <div className='blog-container'>
                {
                    insideMyPost ?

                        <div className='blog-head-inside-myPost p-2 shadow'>
                            <div className='fs-4 text-black d-flex justify-content-end w-100 p-2'>
                                <Link to={'/blogEditor'}><i class="fa-solid fa-pen-to-square mx-3 text-success"></i></Link>
                                <i class="fa-solid fa-trash mx-2 text-danger"></i>
                            </div>
                        </div>

                        :
                        <div className='blog-head p-2 shadow'>
                            <div className='d-flex align-items-center justify-content-start'>
                                <div className='profile'>
                                    <img width={'100%'} className='img-fluid rounded-circle' src={profileImg} title='Profile' alt="Profile" />
                                </div>
                                <span className='text-white'>Abdul basith M</span>
                            </div>
                            <div className='me-3 fs-5 text-black'>
                                <i class="fa-solid fa-ellipsis-vertical text-white"></i>
                            </div>
                        </div>
                }
                <div className='blog-body p-4'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ex necessitatibus nobis, suscipit a, iusto nisi perferendis atque sapiente, laudantium adipisci excepturi maiores voluptatibus repellat consectetur deleniti quasi dicta reiciendis!
                    Optio, officia minus veritatis eligendi expedita adipisci blanditiis possimus magni corporis itaque fuga voluptatibus iusto est eos sequi maiores modi soluta id ullam inventore non, explicabo dicta. Obcaecati, distinctio. Veniam.
                    Temporibus numquam cumque maxime iusto enim, minus modi recusandae quod deleniti quae placeat tempore, similique tenetur voluptatum. Similique quas temporibus in, sint suscipit sapiente dolor laudantium consequuntur, officia eligendi at.
                    Culpa nesciunt at, reiciendis, hic eum adipisci aliquam quas minus magnam ex numquam. Animi repudiandae debitis error iure dolore. Minus quis magnam libero illo animi non expedita alias quae molestias.
                    Magnam, facere! Ut eius aliquid veniam consequatur repellat vitae asperiores! Sed, officia recusandae non itaque sit ut illo eveniet fuga consectetur aliquam voluptates expedita officiis voluptatibus similique nemo soluta quos.
                    Necessitatibus optio officia nam voluptatum delectus a ratione tempore, tenetur corporis unde fuga molestiae quisquam animi! Quas illum error corrupti nobis, ut magnam ipsum sapiente velit laborum omnis? Quia, facere.
                    Dolorum quia nobis pariatur doloribus aliquam fugit culpa alias. Omnis, commodi! In dolor hic saepe amet beatae nisi atque iste asperiores, voluptate pariatur, ab commodi esse placeat iusto cupiditate similique!
                    Eum ab quia consequuntur? Quae labore praesentium eligendi natus sed et officiis qui accusamus voluptas dolorem, soluta illum enim aperiam rem voluptate, tempore dolore. Adipisci corporis quos aspernatur aperiam ab!
                    Quia placeat animi molestiae eaque, exercitationem quae ullam quibusdam natus! Ratione facilis assumenda soluta debitis eligendi sed libero voluptatem tenetur, tempora at exercitationem ut earum ullam reprehenderit labore fuga impedit!
                    Alias maiores minima id, dolor dolorum illo labore distinctio voluptatibus assumenda neque facere iste expedita magnam eius officiis molestias quibusdam. Non hic veritatis dignissimos dicta facilis quos corrupti voluptatem. Enim.
                    Alias, ipsum libero nemo nisi nulla sunt cumque est veritatis placeat officia eius dignissimos id omnis inventore beatae nihil unde asperiores impedit tenetur et molestiae voluptas iste laboriosam? Aliquam, quod.
                    Dolorem fugit molestias qui ullam tempora impedit esse commodi dolores, perspiciatis velit mollitia quasi similique, natus amet ipsam deserunt ipsa nostrum animi pariatur illo iste. Alias facilis deserunt placeat ea.
                    Illum enim ullam deleniti! Nisi pariatur consectetur obcaecati optio commodi. Possimus dolorem quo veniam neque recusandae? Saepe et adipisci, quod asperiores assumenda, voluptatem ex rem at ipsum est animi ad.
                    Molestiae numquam suscipit minima! Ipsa nesciunt ad ut quas. Saepe facere similique, nulla omnis facilis vero ut natus sed in sint, tempora ipsum, iste quas obcaecati quos corrupti. Ducimus, nesciunt!
                    Deserunt totam velit at, recusandae delectus molestiae nihil consequatur in minima consectetur culpa, ratione dolor? Ipsa quidem dolores quia quae totam quasi tempore dolorem sunt cumque est officiis, dolor maiores!
                    Vero quo quisquam rem aperiam, atque, perferendis voluptates impedit vel libero odit repellendus nulla perspiciatis enim consequuntur magni voluptate quasi suscipit ipsam sequi fuga ad distinctio earum! Perferendis, sunt mollitia.
                    Voluptate, consequatur voluptatibus similique, illo corrupti eos tempore voluptatem atque, perspiciatis deleniti enim tempora. Quia ab minima earum fugit sit. Ipsum vel ipsa neque et, voluptatum corporis itaque architecto tempora.
                    Nostrum commodi distinctio similique consequuntur neque! Dignissimos fuga, ipsam ex quasi vero, facere inventore est itaque asperiores ullam perferendis ducimus! Voluptatibus, magnam doloremque consequatur reiciendis accusamus nulla unde architecto ducimus.
                    Natus ad deleniti ratione vero voluptates! Qui fugiat tempora, impedit, laborum accusantium aperiam quas consectetur temporibus blanditiis soluta dolor numquam voluptatibus vel! Rerum laboriosam dolores esse minima delectus nostrum fugit.
                    Illum, iure! Illo non nulla voluptas necessitatibus praesentium, perspiciatis officia atque ullam accusantium repudiandae, sequi dolorum enim esse, ipsam a provident natus unde officiis nam omnis iste amet. Dolores, explicabo!
                    Nihil magnam repellendus non. Facilis aperiam inventore nobis amet nemo, error quia molestias magnam, odit repellendus illum culpa pariatur sequi iusto quod necessitatibus repudiandae, enim illo? Eaque nulla fugit maiores.
                    Tempora magnam delectus laudantium architecto vitae nesciunt quis quos odio voluptatum, aut, ullam sed quisquam cum dignissimos eius consectetur dicta deleniti vero. A amet omnis esse nobis eligendi voluptatum reiciendis!
                    Cum fugiat error, ullam repellat adipisci natus repellendus a reiciendis voluptate excepturi harum. Facere esse atque beatae! Inventore, vel repellendus ab, architecto tempore incidunt, temporibus deserunt commodi ut veritatis voluptatibus.
                    Illo aliquam quos ducimus consequuntur at distinctio accusantium corporis ad temporibus accusamus voluptatibus numquam molestias sunt fugiat illum enim aut cumque vero, placeat doloremque autem? Numquam, totam temporibus! Deserunt, tenetur.
                </div>
                {
                    !insideMyPost ?
                        <div className='blog-footer p-3 shadow-lg'>
                            <i class="fa-regular fa-heart fs-5 p-2 text-white"></i>
                        </div>
                    :
                    null
                }
            </div>


        </>
    )
}

export default BlogView