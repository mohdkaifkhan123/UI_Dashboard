import "./Content.css";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";
import { data } from "../../Data/BarChartData";
import { COLORS, pieChartData } from "../../Data/PieChartData";
import {
  AiOutlineDollar,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  BsReceiptCutoff,
  MdAccountBalanceWallet,
  PiHandbagBold,
} from "../../Constants/Icons";
import Card from "../Card/Card";

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#ffff",
          padding: "5px",
          border: "1px solid #cccc",
        }}
      >
        <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
      </div>
    );
  }
  return null;
};
const Content = () => {
  const [searchInput, setSearchInput] = useState("");
  const [productSearch, setProductSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [timeFilter, setTimeFilter] = useState("");
  const [chartWidth, setChartWidth] = useState(900);
  const [innerRadius, setInnerRadius] = useState(60);

  const updateChartWidth = () => {
    const screenWidth = window.innerWidth;
    console.log("Screen width:", screenWidth);

    if (screenWidth > 1937) {
      setChartWidth(1200);
    } else if (screenWidth > 1716) {
      setChartWidth(1000);
    } else if (screenWidth >= 1378 && screenWidth < 1600) {
      setChartWidth(700);
    } else if (screenWidth >= 970 && screenWidth < 1378) {
      setChartWidth(600);
    } else if (screenWidth >= 800 && screenWidth < 970) {
      setChartWidth(400);
    } else if (screenWidth > 768 && screenWidth <= 800) {
      setChartWidth(450);
    } else if (screenWidth <= 768 && screenWidth >= 800) {
      setChartWidth(600);
    } else if (screenWidth < 768 && screenWidth > 660) {
      setChartWidth(500);
    } else {
      setChartWidth(400);
    }
    console.log(chartWidth);
  };

  useEffect(() => {
    updateChartWidth();

    window.addEventListener("resize", updateChartWidth);

    return () => {
      window.removeEventListener("resize", updateChartWidth);
    };
  }, []);

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleDropdownFilter = (event) => {
    setTimeFilter(event.target.value);
  };
  const handleProductSearch = (e) => {
    e.preventDefault();
    setProductSearch(e.target.value);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div className="main-container">
      <div className="header">
        <p>Hello KAIF 👋,</p>
        <div className="input-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            name="search"
            value={searchInput}
          />
        </div>
      </div>
      <div className="cards-container">
        <div className="card">
          <Card
            icon={<AiOutlineDollar size={65} color="#00A645" />}
            color="#E4FFF0"
            title="Earning"
            amount="$198k"
            percentageChangeIcon={<AiOutlineArrowUp color="green" />}
            percentageTextColor="green"
            percentageChangeText="37.8%"
            percentageChangeSuffix="this month"
          />
        </div>

        <div className="card">
          <Card
            icon={<BsReceiptCutoff size={50} color="#A817FF" />}
            color="#E7DBFF"
            title="Orders"
            amount="$2.4k"
            percentageChangeIcon={<AiOutlineArrowDown color="red" />}
            percentageTextColor="red"
            percentageChangeText="2% "
            percentageChangeSuffix="this month"
          />
        </div>

        <div className="card">
          <Card
            icon={<MdAccountBalanceWallet size={50} color="#0759BF" />}
            color="#CEF4FF"
            title="Balance"
            amount="$2.4k"
            percentageChangeIcon={<AiOutlineArrowDown color="red" />}
            percentageTextColor="red"
            percentageChangeText="2%"
            percentageChangeSuffix="this month"
          />
        </div>

        <div className="card">
          <Card
            icon={<PiHandbagBold size={50} color="#E02A3C" />}
            color="#FFB4DB"
            title="Total sales"
            amount="$89k"
            percentageChangeIcon={<AiOutlineArrowUp color="green" />}
            percentageTextColor="green"
            percentageChangeText="11%"
            percentageChangeSuffix="this week"
          />
        </div>
      </div>
      <div className="graph-card-container">
        <div className="bar-chart-container">
          <div className="bar-chart-header">
            <div className="bar-chart-details">
              <h4>Overview</h4>
              <p>Monthly Earning</p>
            </div>
            <div className="bar-chart-dropdown">
              <select value={selectedOption} onChange={handleDropdownChange}>
                <option value="">Half-yearly</option>
                <option value="option1">Quaterly</option>
                <option value="option2">Yearly</option>
              </select>
            </div>
          </div>
          <div className="bar-chart">
            <BarChart width={chartWidth} height={250} data={data}>
              <Bar
                dataKey="earnings"
                fill="lightblue"
                radius={[5, 5, 5, 5]}
                baseValue={100}
              />
              <XAxis dataKey="name" />
              {/* <Tooltip active /> */}
            </BarChart>
          </div>
        </div>
        <div className="pie-chart-container">
          <div className="pie-chart-details">
            <h4>Customers</h4>
            <p>Customer's that buy products</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                dataKey="value"
                nameKey="name"
                data={pieChartData}
                cx="50%"
                cy="50%"
                innerRadius={pieChartData.id === 1 ? 50 : 60}
                outerRadius={80}
                fill="#8884d8"
                label
              >
                <h1>65shjhsjhjs </h1>
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <text
                x="50%"
                y="42%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="20"
                fill="#333"
                fontWeight={"bold"}
              
              >
                65% 
              </text>
              <text
                x="50%"
                y="49%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="15"
               
                fill="#333"
              >
               Total New
              </text>
              <text
                x="50%"
                y="55%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="15"
                fill="#333"
              >
                Customers
              </text>
              <Tooltip content={CustomTooltip} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="listing-container">
        <div className="listing-header-container">
          <h3>Product Sell</h3>
          <div className="filter-container">
            <div className="product-input-container">
              <FaSearch className="product-search-icon" size={13} />
              <input
                type="text"
                placeholder="Search"
                onChange={handleProductSearch}
                name="search"
                value={productSearch}
              />
            </div>
            <div className="filter-dropdown">
              <select value={timeFilter} onChange={handleDropdownFilter}>
                <option value="">Last 30 days</option>
                <option value="option1">Daily</option>
                <option value="option2">Weekly</option>
                <option value="option3">Monthly</option>
              </select>
            </div>
          </div>
        </div>
        <div className="products-listing">
          <div className="product-listing-header">
            <div className="column product-name">Product Name</div>
            <div className="column stock">Stock</div>
            <div className="column price">Price</div>
            <div className="column total-sales">Total Sales</div>
          </div>
          <hr />
          <div className="product-item">
            <div className="column product-name">
              <div className="product-image">
                <img style={{ marginTop: "-1.5%"}}
                  src="https://images.inc.com/uploaded_files/inc5000company/screen_shot_20220624_at_10.20.30_pm_146555.png"
                  alt="Product"
                />
              </div>
              <div className="product-info">
                <p className="product-title"style={{ marginTop: "-1.5%"}}>Abstract 3d</p>
                <p className="product-bio">
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="column stock" style={{ marginLeft: "20%"}}>32 in stock</div>
            <div className="column price">
              <span className="price-dollar">$</span>45.99
            </div>
            <div className="column total-sales">20</div>
          </div>
          <div className="product-item">
            <div className="column product-name">
              <div className="product-image">
                <img style={{ marginTop: "-1.5%"}}
                  src="https://images.inc.com/uploaded_files/inc5000company/screen_shot_20220624_at_10.20.30_pm_146555.png"
                  alt="Product"
                />
              </div>
              <div className="product-info">
                <p className="product-title" style={{ marginTop: "-1.5%"}}>Abstract 3d</p>
                <p className="product-bio">
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="column stock" style={{ marginLeft: "20%"}}>32 in stock</div>
            <div className="column price">
              <span className="price-dollar">$</span>45.99
            </div>
            <div className="column total-sales">20</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
