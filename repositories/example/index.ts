import { firebaseApplocation, region } from '@/config'

export const existTodayWorkModelByUserId = async (
  userId: string,
  today: Date
) => {
  const FUNCTION_NAME = 'existDayWorkFromUserId'
  const requestFromHosting = firebaseApplocation
    .functions(region)
    .httpsCallable(FUNCTION_NAME)
  const requestingData = {
    uid: userId,
    workDay: today,
  }

  try {
    return await requestFromHosting(requestingData)
  } catch (e) {
    return null
  }
}
