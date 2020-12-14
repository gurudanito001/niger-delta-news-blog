import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
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

export default function Home( {allPostsData} ) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header>
        <h5>Top Stories</h5>
      </header>
      <Row className="mb-3">
        <Col xs={12} md={8}>
          <Carousel>
            <Carousel.Item>
              <div className="jumbotron">
                <h1>This is jumbotron 1</h1>
              </div>
              <p>
                This is the descriptive text that will accompany this jumbotron. <br />
                This is a news blog site so this will be the story that will accompany <br />
                The media or image of this story.<br />
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <div className="jumbotron">
                <h1>This is jumbotron 2</h1>
              </div>
              <p>
                This is the descriptive text that will accompany this jumbotron. <br />
                This is a news blog site so this will be the story that will accompany <br />
                The media or image of this story.<br />
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <div className="jumbotron">
                <h1>This is jumbotron 3</h1>
              </div>
              <p>
                This is the descriptive text that will accompany this jumbotron. <br />
                This is a news blog site so this will be the story that will accompany <br />
                The media or image of this story.<br />
              </p>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs={12} md={4}>
          <Row className="border-bottom mx-1 py-1">
            <Col xs={4} className="p-0 text-center">
              <div className="jumbotron py-3 mb-0  px-0"> img 1</div>
            </Col>
            <Col xs={8} className="px-2">
              <h6 style={{fontSize: '.9rem'}}>Headline of one of the top stories that will be highlighted</h6>
            </Col>
          </Row>
          <Row className="border-bottom mx-1 py-1">
            <Col xs={4} className="p-0 text-center">
              <div className="jumbotron py-3 mb-0  px-0"> img 2</div>
            </Col>
            <Col xs={8} className="px-2">
              <h6 style={{fontSize: '.9rem'}}>Headline of one of the top stories that will be highlighted</h6>
            </Col>
          </Row>
          <Row className="border-bottom mx-1 py-1">
            <Col xs={4} className="p-0 text-center">
              <div className="jumbotron py-3 mb-0  px-0"> img 3</div>
            </Col>
            <Col xs={8} className="px-2">
              <h6 style={{fontSize: '.9rem'}}>Headline of one of the top stories that will be highlighted</h6>
            </Col>
          </Row>
          <Row className="border-bottom mx-1 py-1">
            <Col xs={4} className="p-0 text-center">
              <div className="jumbotron py-3 mb-0  px-0"> img 4</div>
            </Col>
            <Col xs={8} className="px-2">
              <h6 style={{fontSize: '.9rem'}}>Headline of one of the top stories that will be highlighted</h6>
            </Col>
          </Row>
          
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={12} md={4}>
          <header>
            <h5>Politics</h5>
          </header>
          <div className="border-bottom mx-1 py-1">
            <figure className="jumbotron mb-2 py-4 px-3">
              <h3>This is the Latest Politics Story</h3>
            </figure>
            <figcaption>
              <h6>Headline of one of the Politics stories that will be highlighted</h6>
            </figcaption>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Politics stories that will be highlighted</h6>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Politics stories that will be highlighted</h6>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Politics stories that will be highlighted</h6>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Politics stories that will be highlighted</h6>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <header>
            <h5>Business</h5>
          </header>
          <div className="border-bottom mx-1 py-1">
            <figure className="jumbotron mb-2 py-4 px-3">
              <h3>This is the Latest Business Story</h3>
            </figure>
            <figcaption>
              <h6>Headline of one of the Business stories that will be highlighted</h6>
            </figcaption>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Business stories that will be highlighted</h6>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Business stories that will be highlighted</h6>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Business stories that will be highlighted</h6>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Business stories that will be highlighted</h6>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <header>
            <h5>Local News</h5>
          </header>
          <div className="border-bottom mx-1 py-1">
            <figure className="jumbotron mb-2 py-4 px-3">
              <h3>This is the Latest Local Story</h3>
            </figure>
            <figcaption>
              <h6>Headline of one of the Local stories that will be highlighted</h6>
            </figcaption>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Local stories that will be highlighted</h6>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Local stories that will be highlighted</h6>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Local stories that will be highlighted</h6>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Local stories that will be highlighted</h6>
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={12} md={3}>
          <header>
            <h5>Health</h5>
          </header>
          <div className="border-bottom mx-1 py-1">
            <figure className="jumbotron mb-2 py-4 px-2">
              <h5>This is the Latest Health Story</h5>
            </figure>
            <figcaption>
              <h6>Headline of one of the Health stories that will be highlighted</h6>
            </figcaption>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Health stories that will be highlighted</h6>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Health stories that will be highlighted</h6>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Health stories that will be highlighted</h6>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Health stories that will be highlighted</h6>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <header>
            <h5>Sports</h5>
          </header>
          <div className="border-bottom mx-1 py-1">
            <figure className="jumbotron mb-2 py-4 px-2">
              <h5>This is the Latest Sports Story</h5>
            </figure>
            <figcaption>
              <h6>Headline of one of the Sports stories that will be highlighted</h6>
            </figcaption>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Sports stories that will be highlighted</h6>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Sports stories that will be highlighted</h6>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Sports stories that will be highlighted</h6>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Sports stories that will be highlighted</h6>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <header>
            <h5>Entertainment</h5>
          </header>
          <div className="border-bottom mx-1 py-1">
            <figure className="jumbotron mb-2 py-4 px-2">
              <h5>This is the Latest Entertainment Story</h5>
            </figure>
            <figcaption>
              <h6>Headline of one of the Entertainment stories that will be highlighted</h6>
            </figcaption>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Entertainment stories that will be highlighted</h6>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Entertainment stories that will be highlighted</h6>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Entertainment stories that will be highlighted</h6>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Entertainment stories that will be highlighted</h6>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <header>
            <h5>Style</h5>
          </header>
          <div className="border-bottom mx-1 py-1">
            <figure className="jumbotron mb-2 py-4 px-2">
              <h5>This is the Latest Style Story</h5>
            </figure>
            <figcaption>
              <h6>Headline of one of the Style stories that will be highlighted</h6>
            </figcaption>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Style stories that will be highlighted</h6>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Style stories that will be highlighted</h6>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Style stories that will be highlighted</h6>
          </div>
          <div className="border-bottom mx-1 py-1">
            <h6 className="font-weight-light" style={{fontSize: '.9rem'}}>Headline of one of the Style stories that will be highlighted</h6>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}