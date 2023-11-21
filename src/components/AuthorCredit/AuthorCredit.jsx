import Link from '../Link/Link';

// Represents the Author Credit in the Footer of the page.
const AuthorCredit = () => {
  return (
    <span>
      Built and designed by{' '}
      <Link href="https://github.com/olsenjames1116" target="_blank">
        olsenjames1116
      </Link>
    </span>
  );
};

export default AuthorCredit;
