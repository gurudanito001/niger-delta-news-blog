import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}



export default function Politics( {allPostsData} ) {

  const renderCategoryBlogPosts = (category) =>{
    let count = 0;
    return allPostsData.map(postData =>{
      if(postData.category.includes(category) && count < 12 ){
        if(count === 0){
          count += 1;
          return (
            <Col xs={12} md={8} key={postData.id}>
                <div className="border-bottom mx-1 py-1">
                    <figure className="jumbotron mb-2 py-4 px-3">
                        <h4>This is the Latest {category} Story</h4>
                    </figure>
                    <figcaption>
                        <h5>
                        <Link href={`/posts/${postData.id}`}>
                            <a className="text-dark">{postData.title}</a>
                        </Link>
                        </h5>
                    </figcaption>
                </div>
            </Col>
          )
        }else{
          count += 1;
          return (
            <Col xs={12} md={4}  key={postData.id}>
                <div className="border-bottom mx-1 py-1" key={postData.id}>
                    <figure className="jumbotron mb-2 py-4 px-3">
                        <h5>This is another {category} Story</h5>
                    </figure>
                    <figcaption>
                        <h6>
                        <Link href={`/posts/${postData.id}`}>
                            <a className="text-dark">{postData.title}</a>
                        </Link>
                        </h6>
                    </figcaption>
                </div>
            </Col>
          )
        }
      }
    })
    
  }

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header>
        <h5>Politics</h5>
      </header>

      <Row className="mb-3">
          {renderCategoryBlogPosts("politics")}
      </Row>

    </Layout>


  )
}