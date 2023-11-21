import Link from '../Link/Link';

// Represents the Asset Credit in the Footer of the page.
const AssetCredit = () => {
  return (
    <span>
      Icons provided by{' '}
      <Link href="https://icons8.com/icons" target="_blank">
        Icons8
      </Link>{' '}
      and{' '}
      <Link href="https://iconduck.com/" target="_blank">
        Iconduck
      </Link>
    </span>
  );
};

export default AssetCredit;
