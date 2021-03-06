import React from 'react';
import StackList from 'components/StackList';
import 'jest-styled-components';

describe('<StackList />', () => {
  it('render snapshots', () => {
    const wrapper = mount(<StackList />);

    expect(wrapper).toMatchInlineSnapshot(`
.c0 {
  margin: -8px 0 0 -8px;
}

.c1 {
  display: inline-block;
  margin: 8px 0 0 8px;
}

.c2 {
  display: inline-block;
  padding: 8px 12px;
  color: #a6c0fe;
  border: 1px #eee solid;
}

.c2:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
}

<StackList>
  <styled.ul>
    <ul
      className="c0"
    >
      <styled.li
        key="0"
      >
        <li
          className="c1"
        >
          <styled.a
            href="https://preactjs.com/"
            rel="noopener"
            target="_blank"
          >
            <a
              className="c2"
              href="https://preactjs.com/"
              rel="noopener"
              target="_blank"
            >
              preact
            </a>
          </styled.a>
        </li>
      </styled.li>
      <styled.li
        key="1"
      >
        <li
          className="c1"
        >
          <styled.a
            href="https://reactjs.org/"
            rel="noopener"
            target="_blank"
          >
            <a
              className="c2"
              href="https://reactjs.org/"
              rel="noopener"
              target="_blank"
            >
              react
            </a>
          </styled.a>
        </li>
      </styled.li>
      <styled.li
        key="2"
      >
        <li
          className="c1"
        >
          <styled.a
            href="https://reacttraining.com/react-router/"
            rel="noopener"
            target="_blank"
          >
            <a
              className="c2"
              href="https://reacttraining.com/react-router/"
              rel="noopener"
              target="_blank"
            >
              react-router
            </a>
          </styled.a>
        </li>
      </styled.li>
      <styled.li
        key="3"
      >
        <li
          className="c1"
        >
          <styled.a
            href="http://gaearon.github.io/react-hot-loader/"
            rel="noopener"
            target="_blank"
          >
            <a
              className="c2"
              href="http://gaearon.github.io/react-hot-loader/"
              rel="noopener"
              target="_blank"
            >
              react-hot-loader
            </a>
          </styled.a>
        </li>
      </styled.li>
      <styled.li
        key="4"
      >
        <li
          className="c1"
        >
          <styled.a
            href="https://redux.js.org/"
            rel="noopener"
            target="_blank"
          >
            <a
              className="c2"
              href="https://redux.js.org/"
              rel="noopener"
              target="_blank"
            >
              redux
            </a>
          </styled.a>
        </li>
      </styled.li>
      <styled.li
        key="5"
      >
        <li
          className="c1"
        >
          <styled.a
            href="https://www.styled-components.com/"
            rel="noopener"
            target="_blank"
          >
            <a
              className="c2"
              href="https://www.styled-components.com/"
              rel="noopener"
              target="_blank"
            >
              styled-components
            </a>
          </styled.a>
        </li>
      </styled.li>
      <styled.li
        key="6"
      >
        <li
          className="c1"
        >
          <styled.a
            href="https://babeljs.io/"
            rel="noopener"
            target="_blank"
          >
            <a
              className="c2"
              href="https://babeljs.io/"
              rel="noopener"
              target="_blank"
            >
              babel
            </a>
          </styled.a>
        </li>
      </styled.li>
      <styled.li
        key="7"
      >
        <li
          className="c1"
        >
          <styled.a
            href="https://webpack.js.org/"
            rel="noopener"
            target="_blank"
          >
            <a
              className="c2"
              href="https://webpack.js.org/"
              rel="noopener"
              target="_blank"
            >
              webpack
            </a>
          </styled.a>
        </li>
      </styled.li>
      <styled.li
        key="8"
      >
        <li
          className="c1"
        >
          <styled.a
            href="https://storybook.js.org/"
            rel="noopener"
            target="_blank"
          >
            <a
              className="c2"
              href="https://storybook.js.org/"
              rel="noopener"
              target="_blank"
            >
              storybook
            </a>
          </styled.a>
        </li>
      </styled.li>
      <styled.li
        key="9"
      >
        <li
          className="c1"
        >
          <styled.a
            href="http://expressjs.com/"
            rel="noopener"
            target="_blank"
          >
            <a
              className="c2"
              href="http://expressjs.com/"
              rel="noopener"
              target="_blank"
            >
              express
            </a>
          </styled.a>
        </li>
      </styled.li>
      <styled.li
        key="10"
      >
        <li
          className="c1"
        >
          <styled.a
            href="https://prettier.io/"
            rel="noopener"
            target="_blank"
          >
            <a
              className="c2"
              href="https://prettier.io/"
              rel="noopener"
              target="_blank"
            >
              prettier
            </a>
          </styled.a>
        </li>
      </styled.li>
      <styled.li
        key="11"
      >
        <li
          className="c1"
        >
          <styled.a
            href="https://eslint.org/"
            rel="noopener"
            target="_blank"
          >
            <a
              className="c2"
              href="https://eslint.org/"
              rel="noopener"
              target="_blank"
            >
              eslint
            </a>
          </styled.a>
        </li>
      </styled.li>
      <styled.li
        key="12"
      >
        <li
          className="c1"
        >
          <styled.a
            href="https://stylelint.io/"
            rel="noopener"
            target="_blank"
          >
            <a
              className="c2"
              href="https://stylelint.io/"
              rel="noopener"
              target="_blank"
            >
              stylelint
            </a>
          </styled.a>
        </li>
      </styled.li>
      <styled.li
        key="13"
      >
        <li
          className="c1"
        >
          <styled.a
            href="https://flow.org/"
            rel="noopener"
            target="_blank"
          >
            <a
              className="c2"
              href="https://flow.org/"
              rel="noopener"
              target="_blank"
            >
              flow
            </a>
          </styled.a>
        </li>
      </styled.li>
      <styled.li
        key="14"
      >
        <li
          className="c1"
        >
          <styled.a
            href="http://airbnb.io/enzyme/"
            rel="noopener"
            target="_blank"
          >
            <a
              className="c2"
              href="http://airbnb.io/enzyme/"
              rel="noopener"
              target="_blank"
            >
              enzyme
            </a>
          </styled.a>
        </li>
      </styled.li>
      <styled.li
        key="15"
      >
        <li
          className="c1"
        >
          <styled.a
            href="https://facebook.github.io/jest/"
            rel="noopener"
            target="_blank"
          >
            <a
              className="c2"
              href="https://facebook.github.io/jest/"
              rel="noopener"
              target="_blank"
            >
              jest
            </a>
          </styled.a>
        </li>
      </styled.li>
      <styled.li
        key="16"
      >
        <li
          className="c1"
        >
          <styled.a
            href="https://developers.google.com/web/tools/workbox/"
            rel="noopener"
            target="_blank"
          >
            <a
              className="c2"
              href="https://developers.google.com/web/tools/workbox/"
              rel="noopener"
              target="_blank"
            >
              workbox
            </a>
          </styled.a>
        </li>
      </styled.li>
    </ul>
  </styled.ul>
</StackList>
`);
  });
});
