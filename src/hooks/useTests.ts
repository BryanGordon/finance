import { useState } from 'react'

export function useTests () {
  const [dataInfo, setDataInfo] = useState([])
  const [dataDate, setDataDate] = useState([])
  const [date, setDate] = useState()
  const [gain, setGain] = useState(0)
  const [dataGain, setDataGain] = useState('')
  const [dataStoredInfo, setDataStored] = useState([])

  return { dataInfo, dataDate, date, gain, dataGain, dataStoredInfo, setDataInfo, setDataDate, setDate, setGain, setDataGain, setDataStored }
}
