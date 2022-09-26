import { FC, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { NotificationState } from '../../state/state'
import { Notification as NotificationType } from '../../utils/types/global'

const Notification: FC<NotificationType> = ({ message, variant = 'success', duration = 3000 }) => {
  const [notification, setNotification] = useRecoilState(NotificationState)

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;

    if (notification.message) {
      timer = setTimeout(() => {
        setNotification({
          message: ''
        })
      }, duration)
    }

    return () => clearTimeout(timer)
  }, [notification])

  if (!notification.message) return null

  return (
    <div className="fixed left-0 right-0 z-20 p-0 m-0 mx-auto top-8 lg:top-12 w-max">
      <span className={`rounded-sm font-medium py-2 lg:py-3 px-6 lg:text-lg ${variants[variant]}`}>{message}</span>
    </div>
  )
}

const variants = {
  'success': 'bg-green-600 text-white',
  'info': 'bg-blue-600 text-white',
  'warning': 'bg-yellow-500 text-white',
  'danger': 'bg-red-700 text-white',
}

export default Notification