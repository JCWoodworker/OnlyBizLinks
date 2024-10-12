import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './app.css'
import PublicHome from './web-app/public-home/PublicHome';
import BizPageLayout from './web-app/biz-page/BizPageLayout';

// TODO
/*
* Fetch business data from database based on url param after forward slash
* return 404 if no business is found
* Hydrate business data and display their BizPage
*/

function App() {
  const showBizPage = true;
	return (
		<>{showBizPage ? <BizPageLayout /> : <PublicHome />}</>
	);
}

export default App
