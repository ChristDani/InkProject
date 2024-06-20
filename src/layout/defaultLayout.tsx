import React, { useState, ReactNode, memo } from 'react';
import Header from '../components/header';
import Footer from '../components/footer'
// import Sidebar from '../components/sidebar';

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
	// const [sidebarOpen, setSidebarOpen] = useState(true);

	return (
		<div className="dark:bg-boxdark-2 dark:text-bodydark">
			{/* <!-- ===== Page Wrapper Start ===== --> */}
			<div className="flex h-screen overflow-hidden">
				{/* <!-- ===== Sidebar Start ===== --> */}
				{/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/> */}
				{/* <!-- ===== Sidebar End ===== --> */}

				{/* <!-- ===== Content Area Start ===== --> */}
				<div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
					{/* <!-- ===== Header Start ===== --> */}
					{/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/> */}
					<Header />
					{/* <!-- ===== Header End ===== --> */}

					{/* <!-- ===== Main Content Start ===== --> */}
					<main className='w-[1440px] mx-auto'>
						<div className="mx-auto max-w-screen-2xl">
							{children}
						</div>
					</main>
					{/* <!-- ===== Main Content End ===== --> */}
					<Footer />
				</div>
				{/* <!-- ===== Content Area End ===== --> */}
			</div>
			{/* <!-- ===== Page Wrapper End ===== --> */}
		</div>
	);
};

export default memo(DefaultLayout);
