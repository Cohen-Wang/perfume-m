import login from '@/service/modules/login'
import auth from '@/service/modules/auth'
import home from '@/service/modules/home'
import ip from '@/service/modules/ip'
import user from '@/service/modules/user'
import role from '@/service/modules/role'
import logic from '@/service/modules/logic'
import systemLog from '@/service/modules/systemLog'
import event from '@/service/modules/event'
import comment from '@/service/modules/comment'
import subComment from '@/service/modules/subComment'
import stock from '@/service/modules/stock'
import conception from '@/service/modules/conception'
import message from '@/service/modules/message'
import team from '@/service/modules/team'
import upload from '@/service/modules/upload'

const apiServer = {
  login,
  auth,
  home,
  ip,
  user,
  role,
  logic,
  systemLog,
  event,
  comment,
  subComment,
  stock,
  conception,
  message,
  team,
  upload
}

export default apiServer
