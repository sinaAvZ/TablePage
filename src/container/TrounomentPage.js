import React, { Component } from 'react'
import Classes from './tournomentpage.module.css'
import logoImage from '../assets/tournoment-page/icon.png'
import Navbar from '../component/navbar/nvabar'
import BoxInfo from '../component/boxinfo/boxinfo'
import Winners from '../component/winners/winners'
import PlayOfOfoghi from '../component/playof Tabel/ofoghi/playOfOfoghi'
import Table from '../component/table/table'
import Pagination from '../component/pagination/pagination'
import Exceptions from '../component/exceptions/exceptions'
import Aux from '../utiliti/Auxilary'
class TournomnentPage extends Component {
    state = {
        exceptions: {
            exceptionShow: false,
            exceptionNumber: 2
        },
        edit: false,
        navbar: {
            fedrasionName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Fedrasion Name'
                },
                value: '',
                clasName: Classes.FedrasionName + " " + Classes.Texts
            },
            subset: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Style'
                },
                value: '',
                clasName: Classes.Subset + " " + Classes.Texts

            },
            ogranizer: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'lorem ipsum is here but in future will change'
                },
                value: '',
                clasName: Classes.Ogranizer + " " + Classes.Texts

            }
        },
        boxinfo: {
            admin: {
                manager: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: ''
                    },
                    value: '',
                    clasName: Classes.Texts
                },
                approval: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: ''
                    },
                    value: '',
                    clasName: Classes.Texts
                },
                register: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: ''
                    },
                    value: '',
                    clasName: Classes.Texts
                }
            },
            configuration: {
                weight: {
                    elementType: 'text',
                    elementConfig: {
                        type: 'text',
                        placeholder: '20-25'
                    },
                    value: '',
                    clasName: Classes.Texts

                },
                Age: {
                    elementType: 'text',
                    elementConfig: {
                        type: 'text',
                        placeholder: '20-25'
                    },
                    value: '',
                    clasName: Classes.Texts

                },

            },
            kdKo: {
                kd: {
                    elementType: 'text',
                    elementConfig: {
                        type: 'text',
                        placeholder: '2'
                    },
                    value: '',
                    clasName: Classes.Texts

                },
                ko: {

                    elementType: 'text',
                    elementConfig: {
                        type: 'text',
                        placeholder: '3'
                    },
                    value: '',
                    clasName: Classes.Texts


                }
            },
            judgeCount: 0,
        },
    }
    navbarChangeHandler = (prop, id) => {
        const updateNavbar = {
            ...this.state.navbar
        }
        const updateNavbarItem = {
            ...this.state.navbar[id]
        }
        updateNavbarItem.value = prop.target.value;
        updateNavbar[id] = updateNavbarItem;
        this.setState({ navbar: updateNavbar })
    }
    boxinfoChangeHandler = (prop, id) => {
        const updateBoxinfo = { ...this.state.boxinfo };
        const updateBoxinfoItem = { ...this.state.boxinfo[id] };
        updateBoxinfoItem.value = prop.target.value;
        updateBoxinfo[id] = updateBoxinfoItem
        this.setState({ boxinfo: updateBoxinfo })
        console.log(updateBoxinfo[id].value);
    }
    judgeCountHnadler = (action) => {
        let updateBoxInfo = { ...this.state.boxinfo }
        switch (action) {
            case 'minus': {
                updateBoxInfo.judgeCount = this.state.boxinfo.judgeCount - 1
                this.setState({ boxinfo: updateBoxInfo })
                break;
            }
            case 'plus': {
                updateBoxInfo.judgeCount = this.state.boxinfo.judgeCount + 1
                this.setState({ boxinfo: updateBoxInfo })
                break;
            }
        }
    }
    exceptionShowHandler = () => {

        const exceptions = { ...this.state.exceptions }
        exceptions.exceptionShow = true
        this.setState({ exceptions: exceptions })
    }

    exceptionHideHandler = () => {
        const exceptions = { ...this.state.exceptions }
        exceptions.exceptionShow = false
        this.setState({ exceptions: exceptions })
    }

    exceptionPlusHandler = () => {
        if (this.state.exceptions.exceptionNumber < 5) {
            const exceptions = { ...this.state.exceptions }
            exceptions.exceptionNumber = this.state.exceptions.exceptionNumber + 1
            this.setState({ exceptions: exceptions })
        }
    }
    exceptionMinusHandler = () => {
        if (this.state.exceptions.exceptionNumber > 0) {
            const exceptions = { ...this.state.exceptions }
            exceptions.exceptionNumber = this.state.exceptions.exceptionNumber - 1
            this.setState({ exceptions: exceptions })
        }
    }
    editHandler = () => {
        this.setState(prevState => ({ edit: !prevState.edit }))
    }


    render() {
        let exceptionShow = ''
        if (this.state.exceptions.exceptionShow) {
            exceptionShow = (<Aux>
                <Exceptions
                    exceptionHide={this.exceptionHideHandler}
                    exceptions={this.state.exceptions}
                    exceptionPlus={this.exceptionPlusHandler}
                    exceptionMinus={this.exceptionMinusHandler}
                />
                <div className={Classes.Background}></div> </Aux>)
        }
        const navbarInputsShouldCreat = []
        for (let a in this.state.navbar) {
            navbarInputsShouldCreat.push({
                config: this.state.navbar[a],
                id: a
            });
        }
        const boxAdminInputs = []
        for (let key in this.state.boxinfo.admin) {
            boxAdminInputs.push({
                config: this.state.boxinfo.admin[key],
                id: key
            })
        }
        const boxConfigurationInputs = []
        for (let key in this.state.boxinfo.configuration) {
            boxConfigurationInputs.push({
                config: this.state.boxinfo.configuration[key],
                id: key
            })
        }
        const boxKdKo = []
        for (let key in this.state.boxinfo.kdKo) {
            boxKdKo.push({
                config: this.state.boxinfo.kdKo[key],
                id: key
            })
        }
        return (
            <div className={Classes.TournomentPage}>
                <Navbar
                    leftImage={logoImage}
                    Right_LeftImage={logoImage}
                    Right_RightImage={logoImage}
                    edit={this.state.edit}
                    data={navbarInputsShouldCreat}
                    change={this.navbarChangeHandler} />
                <BoxInfo
                    configuration={boxConfigurationInputs}
                    admin={boxAdminInputs}
                    kdKo={boxKdKo}
                    edit={this.state.edit}
                    exceptionShow={this.exceptionShowHandler}
                    editHandler={this.editHandler}
                    judgeCount={this.state.boxinfo.judgeCount}
                    judgeCountHandler={this.judgeCountHnadler} 
                    change={this.boxinfoChangeHandler}/>
                {exceptionShow}
                <Winners />
                <PlayOfOfoghi />
                {/* <PlayOfTable /> */}
                <Pagination />
                <Table />
            </div>
        )
    }
}
export default TournomnentPage