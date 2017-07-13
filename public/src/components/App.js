import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      dummyStateVar: 'Inside App'
    }
  }
  render() {
    console.log('hai')
    return (
      <div className="temp">{this.state.dummyStateVar}</div>
    )
  }
}

// import { AppBar, Checkbox, IconButton, Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox'

// export default class LayoutTest extends React.Component {
//   state = {
//     drawerActive: false,
//     drawerPinned: false,
//     sidebarPinned: false
//   }

//   toggleDrawerActive = () => {
//     this.setState({ drawerActive: !this.state.drawerActive })
//   }

//   toggleDrawerPinned = () => {
//     this.setState({ drawerPinned: !this.state.drawerPinned })
//   }

//   toggleSidebar = () => {
//     this.setState({ sidebarPinned: !this.state.sidebarPinned })
//   }

//   render() {
//     const temp = { 'background-color': 'red' }
//     return (
//       <div className="temp">
//         {/* <Layout>
//           <NavDrawer
//             active={this.state.drawerActive}
//             pinned={this.state.drawerPinned} permanentAt="xxxl"
//             onOverlayClick={this.toggleDrawerActive}
//           >
//             <p>Navigation, account switcher, etc. go here.</p>
//           </NavDrawer>
//           <Panel>
//             <AppBar leftIcon="menu" onLeftIconClick={this.toggleDrawerActive} />
//             <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
//               <h1>Main Content</h1>
//               <p>Main content goes here.</p>
//               <Checkbox label="Pin drawer" checked={this.state.drawerPinned} onChange={this.toggleDrawerPinned} />
//               <Checkbox label="Show sidebar" checked={this.state.sidebarPinned} onChange={this.toggleSidebar} />
//             </div>
//           </Panel>
//           <Sidebar pinned={this.state.sidebarPinned} width={5}>
//             <div><IconButton icon="close" onClick={this.toggleSidebar} /></div>
//             <div style={{ flex: 1 }}>
//               <p>Supplemental content goes here.</p>
//             </div>
//           </Sidebar>
//         </Layout> */}
//       </div>
//     )
//   }
// }
