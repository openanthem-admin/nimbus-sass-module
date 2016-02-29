import test from 'ava';
import addContributor from './addContributor';

function getUserLine(content, {login}) {
  return content
    .split('\n')
    .filter(line => line.indexOf(login) !== -1)
    [0];
}

function fixtures() {
  const options = {
    projectOwner: 'kentcdodds',
    projectName: 'all-contributors',
    imageSize: 100,
    contributions: ['doc'],
    emoji: {
      code: ':code:',
      doc: ':doc:',
      test: ':test:'
    }
  };

  const jfmengelsUser = {
    login: 'jfmengels',
    name: 'Jeroen Engels',
    html_url: 'https://github.com/jfmengels',
    avatar_url: 'https://avatars.githubusercontent.com/u/3869412?v=3'
  };

  const kentcdoddsUser = {
    login: 'kentcdodds',
    name: 'Kent C. Dodds',
    html_url: 'https://github.com/kentcdodds',
    avatar_url: 'https://avatars.githubusercontent.com/u/1500684?v=3'
  };

  const content = `
# project

Description

## Contributors
These people contributed to the project:
:---: | :---:
[![Kent C. Dodds](https://avatars.githubusercontent.com/u/1500684?v=3&s=100)<br />Kent C. Dodds](https://github.com/kentcdodds) | [:doc:](https://github.com/kentcdodds/all-contributors/commits?author=kentcdodds)
[![Divjot Singh](https://avatars1.githubusercontent.com/u/6177621?s=130)<br />Divjot Singh](http://bogas04.github.io) | [:doc:](https://github.com/kentcdodds/all-contributors/commits?author=bogas04)

Thanks a lot guys!
`;

  return {options, jfmengelsUser, kentcdoddsUser, content};
}

test('should add a new contributor to the end of the list', t => {
  t.pass(1);
  const {options, jfmengelsUser, content} = fixtures();
  const expected = `
# project

Description

## Contributors
These people contributed to the project:
:---: | :---:
[![Kent C. Dodds](https://avatars.githubusercontent.com/u/1500684?v=3&s=100)<br />Kent C. Dodds](https://github.com/kentcdodds) | [:doc:](https://github.com/kentcdodds/all-contributors/commits?author=kentcdodds)
[![Divjot Singh](https://avatars1.githubusercontent.com/u/6177621?s=130)<br />Divjot Singh](http://bogas04.github.io) | [:doc:](https://github.com/kentcdodds/all-contributors/commits?author=bogas04)
[![Jeroen Engels](https://avatars.githubusercontent.com/u/3869412?v=3&s=100)<br />Jeroen Engels](https://github.com/jfmengels) | [:doc:](https://github.com/kentcdodds/all-contributors/commits?author=jfmengels)

Thanks a lot guys!
`;

  t.is(addContributor(options, jfmengelsUser, content), expected);
});

test('should be able to inject several contributions', t => {
  t.pass(1);
  const {options, jfmengelsUser, content} = fixtures();
  options.contributions = ['doc', 'code'];
  const expected = '[![Jeroen Engels](https://avatars.githubusercontent.com/u/3869412?v=3&s=100)<br />Jeroen Engels](https://github.com/jfmengels) | [:doc::code:](https://github.com/kentcdodds/all-contributors/commits?author=jfmengels)';

  const result = addContributor(options, jfmengelsUser, content);

  t.is(getUserLine(result, jfmengelsUser), expected);
});

test('should be able to specify a new template in options', t => {
  t.pass(1);
  const {options, jfmengelsUser, content} = fixtures();
  options.template = '<%= user.login %> made awesome contributions!';
  const expected = 'jfmengels made awesome contributions!';

  const result = addContributor(options, jfmengelsUser, content);

  t.is(getUserLine(result, jfmengelsUser), expected);
});

test('should not modify content when adding an existing contributor that has the given contribution types', t => {
  t.pass(1);
  const {options, kentcdoddsUser, content} = fixtures();
  const expected = content;

  const result = addContributor(options, kentcdoddsUser, content);
  t.is(result, expected);
});

test('should add new contributions types to an existing contributor', t => {
  t.pass(1);
  const {options, kentcdoddsUser, content} = fixtures();
  options.contributions = ['doc', 'code'];
  const expected = '[![Kent C. Dodds](https://avatars.githubusercontent.com/u/1500684?v=3&s=100)<br />Kent C. Dodds](https://github.com/kentcdodds) | [:doc::code:](https://github.com/kentcdodds/all-contributors/commits?author=kentcdodds)';

  const result = addContributor(options, kentcdoddsUser, content);

  t.is(getUserLine(result, kentcdoddsUser), expected);
});