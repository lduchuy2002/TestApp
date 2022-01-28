import React from 'react'
import StoreProvider from './StoreProvider/StoreProvider'

const AppProvider: React.FC = ({ children }) => <StoreProvider>{children}</StoreProvider>

export default AppProvider
