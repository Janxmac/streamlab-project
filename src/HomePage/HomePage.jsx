import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom'
import ReactWOW from 'react-wow'

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(this.state);
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { user } = this.state;
        this.setState({ submitted: true });
        if (user.email && user.password) {
            //dispatch action
        }
    }

    render() {
        const { user, submitted } = this.state;
        return (
            <div className="section-wrap">
                <section className="mainHeader">

                    <div className="bg">
                    </div>
                    <div className="bg-overlay">
                    </div>

                    <div className="container h-100">
                        <div className="row h-100 align-items-start">
                            <div className="grid-24 grid-m-14 grid-xxl-15">
                                <ReactWOW animation='rollIn' delay='2s'>
                                    <h1>Discover & share <br/>the best content on the web</h1>
                                </ReactWOW>
                            </div>
                            <div className="grid-24 grid-m-9 offset-m-1 grid-xxl-8 offset-xxl-1">
                                <ReactWOW animation='fadeInRight' delay='2.5s'>
                                <form name="form" onSubmit={this.handleSubmit}>
                                    <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                                        {/*<label htmlFor="email">E-mail</label>*/}
                                        <input type="text" className="form-control" name="email" value={user.email} onChange={this.handleChange} placeholder="Email Address" />
                                        {/*{submitted && !user.email &&*/}
                                        {/*<div className="help-block text-danger">E-mail is required</div>*/}
                                        {/*}*/}
                                    </div>
                                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                                        {/*<label htmlFor="password">Password</label>*/}
                                        <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} placeholder="Password" />
                                        {/*{submitted && !user.password &&*/}
                                        {/*<div className="help-block text-danger">Password is required</div>*/}
                                        {/*}*/}
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Subscribe to our weekly newsletter for free virtual gifts
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-pink btn--pill w-100">Register Now</button>
                                    </div>
                                </form>
                                </ReactWOW>
                            </div>
                        </div>
                    </div>
                </section>

                <ReactWOW animation='fadeInUp' delay='3.5s'>
                <section className="socialBlock">
                    <div className="container">
                        <div className="row">
                            <div className="items grid-24">
                                <div className="item">
                                    <div className="left-content">
                                        <div className="number">1</div>
                                        <div className="bullet">
                                        </div>
                                    </div>
                                    <div className="right-content">
                                        <div className="image">
                                            <svg viewBox="0 0 96 74" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m62.776 32.322l-21.209-11.699c-1.2195-0.6726-2.6609-0.6475-3.8562 0.0665-1.196 0.7147-1.9094 1.9774-1.9094 3.3788v23.197c0 1.3948 0.709 2.6552 1.897 3.3707 0.6203 0.3737 1.3081 0.5612 1.9973 0.5612 0.6313 0 1.2641-0.1573 1.8464-0.4733l21.209-11.497c1.259-0.683 2.0449-2.0024 2.0507-3.4445 0.0052-1.442-0.7712-2.7674-2.0266-3.46zm-21.348 12.025v-17.337l15.851 8.7439-15.851 8.5932z" fill="#330A8B"/>
                                                <path d="m95.294 17.301l-0.0044-0.0443c-0.0813-0.779-0.8906-7.7079-4.2319-11.232-3.8621-4.1452-8.2405-4.6488-10.346-4.8903-0.1743-0.01994-0.334-0.0384-0.4768-0.0576l-0.1677-0.01772c-12.691-0.93035-31.858-1.0574-32.05-1.0581l-0.0169-7.3838e-4 -0.0168 7.3838e-4c-0.1919 7.3837e-4 -19.359 0.12774-32.164 1.0581l-0.1692 0.01772c-0.1362 0.01846-0.2864 0.03545-0.4497 0.05464-2.0815 0.24219-6.4131 0.7465-10.286 5.0416-3.1824 3.4866-4.1023 10.267-4.1968 11.029l-0.010986 0.0989c-0.028565 0.3241-0.70605 8.0409-0.70605 15.788v7.242c0 7.747 0.67749 15.464 0.70605 15.789l0.005127 0.0487c0.081298 0.7664 0.88989 7.5684 4.2158 11.094 3.6313 4.0065 8.2228 4.5366 10.693 4.8216 0.3903 0.0451 0.7265 0.0835 0.9558 0.1241l0.2219 0.031c7.3278 0.7029 30.303 1.0492 31.277 1.0632l0.0293 8e-4 0.0293-8e-4c0.1919-7e-4 19.358-0.1277 32.049-1.0581l0.1677-0.0177c0.1604-0.0214 0.3406-0.0406 0.5384-0.0613 2.0698-0.2215 6.3779-0.6815 10.197-4.9183 3.1824-3.4873 4.103-10.268 4.1968-11.029l0.011-0.099c0.0285-0.3248 0.7068-8.0409 0.7068-15.788v-7.242c-8e-4 -7.7471-0.6783-15.463-0.7068-15.788zm-4.9197 23.03c0 7.1703-0.6211 14.555-0.6797 15.233-0.2387 1.8673-1.2092 6.1573-2.7597 7.8563-2.3906 2.6515-4.8464 2.9144-6.6394 3.1056-0.2168 0.0229-0.4175 0.0451-0.5991 0.068-12.275 0.8949-30.718 1.0322-31.568 1.0374-0.9529-0.0141-23.592-0.3633-30.696-1.0286-0.364-0.0598-0.7574-0.1056-1.1719-0.1528-2.1028-0.243-4.9812-0.5752-7.1946-3.0296l-0.052-0.0561c-1.5234-1.6001-2.4661-5.6117-2.7056-7.7781-0.04468-0.5124-0.68188-7.984-0.68188-15.255v-7.242c0-7.1623 0.61963-14.539 0.67968-15.23 0.28492-2.1996 1.2737-6.2297 2.7598-7.8586 2.4638-2.732 5.0618-3.0347 6.78-3.2348 0.164-0.0192 0.3171-0.03692 0.4584-0.05538 12.454-0.89934 31.03-1.033 31.696-1.0382 0.6665 0.00443 19.236 0.13882 31.579 1.0382 0.1516 0.0192 0.3171 0.03839 0.4951 0.05907 1.7673 0.20305 4.4385 0.51022 6.8899 3.1462l0.0227 0.02437c1.5234 1.6001 2.466 5.6818 2.7055 7.8918 0.0425 0.4836 0.6819 7.9715 0.6819 15.258v7.242z" fill="#330A8B"/>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <div className="title">
                                                Watch your favorite videos all from one place
                                            </div>
                                            <div className="text">
                                                Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left-content">
                                        <div className="number">2</div>
                                        <div className="bullet">
                                        </div>
                                    </div>
                                    <div className="right-content">
                                        <div className="image">
                                            <svg fill="none" viewBox="0 0 88 86" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m82.913 41.678c-3.4496-2.9512-8.3225-3.2898-11.69-3.2898-1.7301 0-3.4047 0.1058-4.984 0.2093-0.1217 0-0.3598-0.0611-0.5661-0.1246-0.3307-0.0894-0.7275-0.1975-1.1773-0.2187-1.6031-0.3081-2.8517-0.6067-4.021-1.4274-2.3862-1.8882-4.4787-4.2421-6.5051-6.5159l-1.455-1.6179c-2.6507-2.8476-5.8993-6.6241-7.521-10.685-0.8544-2.0293-1.2036-4.1786-1.0819-6.777 0.0158-0.4961 0.0529-0.9735 0.0793-1.4391 0.1217-1.8882 0.2381-3.6707-0.455-5.5048-0.9788-2.7254-3.3914-4.2868-6.6215-4.2868-2.1746 0-4.4576 0.73367-6.193 1.9588-4.3517 2.6901-7.1479 7.7882-7.4918 13.653-0.1773 3.2874 0.9497 6.1138 2.0396 8.8439 0.9497 2.3821 1.8492 4.6254 1.8386 7.0545-0.0106 3.6824-3.5899 4.7077-8.6532 5.7518-0.5529 0.1152-1.1005 0.2281-1.5291 0.3268-0.5793 0.0941-1.1692 0.1811-1.7671 0.2704-3.7989 0.5597-8.1003 1.2017-11.217 3.84-2.3518 2.0764-3.4708 5.5025-2.8491 8.7311 0.44707 2.328 1.738 4.2445 3.6031 5.3826-1.1746 3.9599 1.0079 8.5735 5.2406 11.036-0.40475 1.7918-0.02646 3.8164 1.0952 5.7094 1.2592 2.1163 3.2512 3.7718 5.4787 4.5595 0.0053 3.6284 2.7909 6.7888 7.177 7.8893 1.2196 0.221 2.5423 0.3268 4.0449 0.3268 2.2222 0 4.4443-0.2304 6.5924-0.4444 0.7196-0.0729 1.4312-0.1434 2.2592-0.2257 1.2672-0.2305 2.5899-0.3763 3.9205-0.5291 2.7434-0.3128 5.5713-0.6349 8.1347-1.6178 2.0767-0.8231 3.9126-2.0106 5.6771-3.1558 0.5767-0.3715 1.1429-0.7383 1.7248-1.1028 0.5715-0.3621 1.1508-0.8395 1.7381-1.3356 1.0211-0.8536 2.0714-1.7355 3.0899-1.9095 0.9073-0.1552 1.7698-0.2398 2.6057-0.3174 0.9365-0.0917 1.8386-0.1787 2.7275-0.3433h0.4391c0.9365 0 1.9655 0.0494 3.0343 0.1105 1.2142 0.0635 2.4788 0.134 3.73 0.134 3.082 0 6.9443-0.348 9.4337-3.0734 3.6692-3.8705 4.1956-9.7681 4.2221-15.56v-0.2516c0.0608-4.2492 0.1005-10.676-4.1481-14.034zm-13.96 23.263c-0.9524 3.064-2.8095 4.3267-6.7406 4.6489-1.2195 0-2.7195 0-4.1321 0.7713-1.4973 0.3668-2.701 1.378-3.7777 2.2739-0.418 0.3527-0.8307 0.7031-1.2142 0.9688-0.5212 0.3363-1.0503 0.6937-1.5952 1.0558-1.627 1.0982-3.3174 2.2316-4.8253 2.89-0.918 0.2069-1.9523 0.4092-2.9946 0.6208l-2.0106 0.4044c-4.2141 0.6749-8.5817 1.03-12.693 1.3545-1.3809 0-2.8095 0-4.2433-0.341-0.8095-0.0917-1.4047-0.4185-1.7804-0.9735-0.5185-0.7619-0.5661-1.8976-0.1481-2.89 0.3386-0.6842 0.2751-1.4273-0.1693-2.034-0.6773-0.9312-2.0397-1.3356-3.0846-1.3356h-0.1376l-0.1349 0.0235c-0.1243 0.0282-0.2434 0.0376-0.3624 0.0376-0.8545 0-1.7328-0.6349-2.3518-1.686-0.7777-1.3357-0.8836-2.9535-0.3201-3.6707 0.6508-0.6796 0.7566-1.6672 0.2831-2.5772-0.418-0.7996-1.1772-1.3216-2.0264-1.4203-1.9947-0.602-3.2856-1.7143-3.8385-3.2804-0.4074-1.3215-0.299-2.8335 0.3862-3.5601 0.6534-0.9642 0.8042-2.0905 0.4047-2.9888-0.3306-0.7384-1.0132-1.2769-2.0369-1.5332-1.8994-0.308-2.4682-1.6766-2.6137-2.7888-0.30951-2.0388 1.4497-3.5908 3.1057-4.3268 2.537-1.2627 5.6427-1.7142 8.6506-2.1516 1.611-0.2352 3.275-0.4727 4.8517-0.8348 5.3887-1.2439 9.259-4.9899 9.632-9.3213 0.2619-3.1839-0.8704-6.1115-1.9603-8.931-0.9285-2.3938-1.8015-4.6512-1.8756-7.0309-0.0767-2.2974 0.672-4.8324 2.1084-7.2544 1.3757-1.9094 3.6904-3.9646 5.529-3.9646 0.0926 0 0.1878 0.00705 0.2645 0.01881 1.1349 0.14579 1.1005 2.0623 0.9762 3.847l-0.0291 0.44208c-0.1667 2.9323-0.2381 5.4014 0.5105 8.2608 1.0556 3.88 3.5396 7.0286 5.9338 10.074 0.5211 0.6631 1.0475 1.3286 1.5766 2.0223 2.2539 2.8853 5.1216 6.0245 8.2405 9.0344 0.5873 0.6326 1.2355 1.331 2.0211 1.813 0.2117 0.3434 0.4947 0.5221 0.7672 0.6091 1.9391 1.3239 4.0131 2.0928 6.6453 2.4737 1.9074 0.3222 3.5476 0.5903 4.3756 1.8295 1.6587 2.6125 1.7089 6.2103 1.7433 9.0838l8e-3 0.6843c0.0555 3.0546 0.0238 6.5724-0.918 9.6529zm12.169-10.114l-0.0053 1.1287c0.0238 4.4326-0.2884 8.9569-2.7222 12.094-0.8174 1.1122-2.4523 1.1945-4.6771 1.1945h-0.2381c1.2566-2.2692 1.7434-4.9099 2.0449-7.3061 0.5212-4.362 0.4683-8.6299-0.164-12.686-0.2725-1.7777-0.6904-3.72-1.6428-5.4437 1.8042 0.1764 3.656 0.6185 5.0687 1.6884 2.4126 1.7848 2.365 6.3279 2.3359 9.3307z" fill="#330A8B"/>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <div className="title">
                                                Watch your favorite videos all from one place
                                            </div>
                                            <div className="text">
                                                Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left-content">
                                        <div className="number">3</div>
                                        <div className="bullet">
                                        </div>
                                    </div>
                                    <div className="right-content">
                                        <div className="image">
                                            <svg fill="none" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m10.664 74.826c5.8805 0 10.664-4.7836 10.664-10.664 0-1.1199-0.1742-2.1988-0.4957-3.2131l15.589-11.033c2.3813 2.2196 5.5729 3.5817 9.0783 3.5817 0.343 0 0.6818-0.0173 1.0185-0.043l5.3369 18.825c-2.2571 1.9564-3.6894 4.8412-3.6894 8.0563 0 5.8805 4.7836 10.664 10.664 10.664s10.664-4.7836 10.664-10.664-4.7835-10.664-10.664-10.664c-0.7228 0-1.4288 0.0729-2.112 0.211l-5.0724-17.892c2.5556-1.3337 4.6294-3.47 5.8791-6.0742l12.177 3.011c0.393 5.5258 5.0106 9.9025 10.634 9.9025 5.8805 0 10.664-4.7836 10.664-10.664s-4.7836-10.664-10.664-10.664c-4.276 0-7.9695 2.5306-9.6684 6.1721l-11.852-2.9313c0.0083-0.1909 0.0146-0.3818 0.0146-0.5748 0-3.1493-1.1004-6.0451-2.9333-8.3286l13.494-16.338c0.863 0.32 1.7961 0.495 2.7695 0.495 4.41 0 7.998-3.588 7.998-7.998 0-4.41-3.588-7.998-7.998-7.998-4.4101 0-7.9981 3.588-7.9981 7.998 0 1.4948 0.4131 2.8944 1.1296 4.0928l-13.49 16.334c-1.878-1.0116-4.024-1.5871-6.3019-1.5871-2.2765 0-4.4218 0.5749-6.2985 1.5857l-9.2602-11.246c1.3955-1.8031 2.2286-4.0622 2.2286-6.513 0-5.8806-4.7835-10.664-10.664-10.664s-10.664 4.7836-10.664 10.664c0 5.8805 4.7836 10.664 10.664 10.664 1.5003 0 2.9291-0.3131 4.2253-0.8748l9.3741 11.383c-1.8343 2.2841-2.9354 5.1806-2.9354 8.3313 0 1.9259 0.4138 3.7553 1.1518 5.4098l-15.329 10.849c-1.9127-1.8128-4.4919-2.9285-7.3287-2.9285-5.8806 0-10.664 4.7836-10.664 10.664s4.7836 10.664 10.664 10.664zm53.498 5.5097c0 2.9403-2.3918 5.3321-5.332 5.3321-2.9403 0-5.3321-2.3918-5.3321-5.3321 0-2.9402 2.3918-5.332 5.3321-5.332 2.9402 0 5.332 2.3918 5.332 5.332zm16.174-37.502c2.9403 0 5.3321 2.3918 5.3321 5.332 0 2.9403-2.3918 5.332-5.3321 5.332-2.9402 0-5.332-2.3917-5.332-5.332 0-2.9402 2.3918-5.332 5.332-5.332zm-8.1757-37.502c1.4697 0 2.666 1.1962 2.666 2.666s-1.1963 2.666-2.666 2.666c-1.4698 0-2.6661-1.1963-2.6661-2.666s1.1963-2.666 2.6661-2.666zm-18.662 34.836c0 4.41-3.588 7.998-7.998 7.998s-7.998-3.588-7.998-7.998c0-4.4101 3.588-7.9981 7.998-7.9981s7.998 3.588 7.998 7.9981zm-37.324-29.504c0-2.9403 2.3918-5.3321 5.3321-5.3321 2.9402 0 5.332 2.3918 5.332 5.3321 0 2.9402-2.3918 5.332-5.332 5.332-2.9403 0-5.3321-2.3918-5.3321-5.332zm-5.5097 48.166c2.9402 0 5.332 2.3918 5.332 5.332 0 2.9403-2.3918 5.332-5.332 5.332-2.9403 0-5.3321-2.3917-5.3321-5.332 0-2.9402 2.3918-5.332 5.3321-5.332z" fill="#330A8B"/>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <div className="title">
                                                Watch your favorite videos all from one place
                                            </div>
                                            <div className="text">
                                                Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </ReactWOW>

                <section className="claimBlock bg--light p-3">
                    <div className="container">
                        <div className="row">
                            <div className="grid-24">
                                <div className="claim text-center">
                                    “My friends and I are obsessed with this app. We send funny vids to each other all day long!” - DotaStream3r86
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="videoBlock bg--dark">
                    <div className="container">
                        <div className="row">
                            <div className="video-wrap grid-24">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/sOuRnSNWr2I">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pressBlock">
                    <div className="container">
                        <div className="row">
                            <div className="grid-24 text-center">
                                <h2>In The Press</h2>
                            </div>
                        </div>
                        <div className="row items">
                            <div className="item grid-24 grid-l-8">
                                <div className="bg-wrap">
                                    <div className="logo">
                                        <img src="/src/_public/frontend/assets/img/img-included/press/techcrunch.png" alt=""/>
                                    </div>
                                    <div className="content">
                                        <div className="title">
                                            Techcrunch
                                        </div>
                                        <div className="text">
                                            Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.
                                        </div>
                                        <a href="">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="item grid-24 grid-l-8">
                                <div className="bg-wrap">
                                    <div className="logo">
                                        <img src="/src/_public/frontend/assets/img/img-included/press/verge.png" alt=""/>
                                    </div>
                                    <div className="content">
                                        <div className="title">
                                            The Verge
                                        </div>
                                        <div className="text">
                                            Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.
                                        </div>
                                        <a href="">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="item grid-24 grid-l-8">
                                <div className="bg-wrap">
                                    <div className="logo">
                                        <img src="/src/_public/frontend/assets/img/img-included/press/wired.png" alt=""/>
                                    </div>
                                    <div className="content">
                                        <div className="title">
                                            Wired
                                        </div>
                                        <div className="text">
                                            Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.
                                        </div>
                                        <a href="">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="grid-24 grid-m-12 users">
                                1,540,337 users
                            </div>
                            <div className="grid-24 grid-m-12 vids">
                                1,962,879,337 vids
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ctaBlock bg--light p-3">
                    <div className="container">
                        <div className="row">
                            <div className="grid-24 button-wrap text-center">
                                <div className="btn btn-pink btn--pill btn--small">
                                    Register Now
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };