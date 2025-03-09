import Banner from "../Banner/Banner";
import Catagories from "../catagorys/Catagories";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Laptops from "../laptops/Laptops";
import Phons from "../laptops/Phons";





const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tabs>
                <section className="flex flex-row">

                    <div className=" flex flex-col flex-1 mt-52">
                    
                            <div className=" flex flex-col flex-1 mt-52">
                            <Tab><button className="btn">All</button></Tab>
                            <Tab><button className="btn">Laptops</button></Tab>
                            <Tab><button className="btn">Phons</button></Tab>
                            <Tab><button className="btn">Accessories</button></Tab>
                            <Tab><button className="btn">Smart Watches</button></Tab>
                            </div>
                       

                    </div>







                    <div className="grid grid-cols-1   gap-4  auto-rows-auto  col-span-3" hidden>
                        <TabPanel>
                        <Catagories ></Catagories>

                        </TabPanel>
                        <TabPanel>
                          <Laptops></Laptops>
                        </TabPanel>
                        <TabPanel>
                        <Phons></Phons>
                        </TabPanel>
                        <TabPanel>
                           
                        </TabPanel>
                        <TabPanel>
                       
                        </TabPanel>
                        
                    </div>
                </section>
            </Tabs>


        </div>
    );
};

export default Home;