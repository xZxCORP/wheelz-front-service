import { Navigate } from 'react-router-dom'
import useApp from '../stores/useApp'

export const PrivateRoute = ({ elem: Elem }: { elem: () => JSX.Element }) => {
  const { appState } = useApp()

  return appState === 'logged' ? <Elem /> : <Navigate to="/" />
}

export const OnlyPublicRoute = ({ elem: Elem }: { elem: () => JSX.Element }) => {
  const { appState } = useApp()

  return appState === 'unlogged' ? <Elem /> : <Navigate to="/" />
}
