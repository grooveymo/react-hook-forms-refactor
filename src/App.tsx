import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import { BasicForm } from './screens/BasicForm'
import { About } from './screens/About'
import { DynamicValidation } from './screens/DynamicValidation'

export const App = () => {
  return (
    <Router>
      <div>
        <ul className="flex">
          <li className="mr-6">
            <NavLink to="/" activeClassName="text-blue-500 hover:text-blue-800" exact>
              Home
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink to="/basic" activeClassName="text-blue-500 hover:text-blue-800">
              Basic
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink to="/dynamic-validation" activeClassName="text-blue-500 hover:text-blue-800">
              Dynamic Validation
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink to="/about" activeClassName="text-blue-500 hover:text-blue-800">
              About
            </NavLink>
          </li>
        </ul>
        <hr />
        <Switch>
          {/* <Route path="/basic" element={<BasicForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/dynamic-validation" element={<DynamicValidation />} /> */}
          <Route path="/basic">
            <BasicForm />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dynamic-validation">
            <DynamicValidation />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
