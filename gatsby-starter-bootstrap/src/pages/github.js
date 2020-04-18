import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Meta from 'components/meta'
import { graphql } from 'gatsby'

class Github extends React.Component {
  render() {
    const { location, data } = this.props
    const viewer = data.github.viewer
    console.log(viewer)
    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Profile" />
        <div>
          <section className="text-center">
            <div className="container">
              <h1>Mon activité sur Github</h1>
              <p className="lead text-muted">Developpeur Web</p>
              <section
                className="bg-light text-black-50 text-center color-inverse"
                id="concept"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <h2 className="section-heading">
                        Mon activité sur Github
                      </h2>
                      <h4>Mon entreprise actuel :{viewer.company}</h4>
                      <hr className="border-primary" />
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 slide-left">
                      <p>
                        {' '}
                        Nombre de repositories :{' '}
                        {viewer.repositories.totalCount}
                      </p>
                      <p>
                        {' '}
                        Commit total de contributions :{' '}
                        {
                          viewer.contributionsCollection
                            .totalCommitContributions
                        }
                      </p>
                    </div>
                    <div className="col-md-6 slide-right">
                      <p>
                        Contributions en issues :{' '}
                        {viewer.contributionsCollection.totalIssueContributions}{' '}
                      </p>
                      <p>
                        Contributions en pullRequest :{' '}
                        {viewer.followers.totalCount}{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="border-primary" />
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 slide-left">
                      <p>
                        {' '}
                        Nombre total de followers: {viewer.followers.totalCount}
                      </p>
                    </div>
                    <div className="col-md-6 slide-right">
                      <p>
                        Commits de toute une vie:{' '}
                        {
                          viewer.contributionsCollection.contributionCalendar
                            .totalContributions
                        }{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <div>
                <a
                  ref="twButton"
                  href="https://twitter.com/DotNet_xtiers"
                  className="twitter-follow-button"
                  data-show-count="false"
                >
                  Follow @lionelkouame
                </a>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Github
export const query = graphql`
  query {
    github {
      viewer {
        repositories {
          totalCount
        }
        contributionsCollection {
          totalCommitContributions
          totalIssueContributions
          totalPullRequestContributions
          contributionCalendar {
            totalContributions
          }
        }

        company
        followers {
          totalCount
        }
      }
    }
  }
`
