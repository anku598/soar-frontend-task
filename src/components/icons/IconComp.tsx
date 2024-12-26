import { IconName, IconRegistry } from './registry'
import { IconProps } from './types'

interface DynamicIconProps extends IconProps {
  name: IconName
}

export function IconComp({ name, ...props }: DynamicIconProps) {
  const IconComponent = IconRegistry[name]
  return <IconComponent {...props} />
}
