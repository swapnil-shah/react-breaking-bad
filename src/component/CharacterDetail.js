import React from 'react'

const CharacterDetail = ({ item }) => {

  const handleDate = (dob) => {
    const d = new Date(dob)
    const year = d.getFullYear()
    const date = d.getDate()
    const monthIndex = d.getMonth()
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    const monthName = months[monthIndex]
    return `${monthName} ${date}, ${year}`
  }

  const handleNameLogo = (str) => {
    let lastCut = str.substring(str.length, 2);
    let firstCut = str.slice(0, 2)
    return (
      <>
        <span className='profile__name--logo'>{firstCut}</span>{lastCut}
      </>
    )
  }
  return (
    <section className="profile_container" >
      <div className="profile_img_section">
        <img className="profile_img-LG" src={item.img} alt={item.name} />
        <div className="profile_portray">{item.portrayed}</div>
      </div>
      <div className="profile_desc_section description">
        <h1 className="profile__name">{handleNameLogo(item.name)}</h1>
        {!(item.birthday.toLowerCase().includes("unknown")) && <div className="profile__dob description">{handleDate(item.birthday)}</div>}
        {!(item.occupation[0].includes("unknown")) && <div className="profile_occupation description"><h2>I am known as </h2><ul>{item.occupation.map((occ, i) => (
          <li style={{ marginBottom: "10px" }} key={i}>{occ}</li>
        ))}
        </ul></div>}
        <div className="profile_appearance description">
          {item.appearance.length > 0 && (
            <>
              <h2>Season appearance</h2>
              <div>
                {item.appearance.map((season) => {
                  return <span className="seasons_item">{season}</span>
                })}
              </div>
            </>
          )}
        </div>
      </div>
      {/* <div className="profile_appearance">
        <ul>
          {item.appearance.length > 0 && (
            <li>
              <strong>Season appearance: </strong>
              {item.appearance.map((season, i, arr) => {
                if (arr.length > 1 && arr.length === i + 1) {
                  return ` and ${season}`
                }
                if (arr.length === 1 || arr.length === i + 2) {
                  return `${season}`
                }
                else {
                  return `${season}, `
                }
              })}
            </li>
          )}
        </ul>
      </div> */}
    </section>
  )
}

export default CharacterDetail
