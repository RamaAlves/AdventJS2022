function getFilesToBackup(lastBackup, changes) {
    let lastChanges = changes.filter(change=> change[1]>lastBackup)
    let backupId = lastChanges.map(change=>change[0])
    let backupSorted = backupId.sort((a,b)=>a-b)
    let newBackup = backupSorted.filter((id,index)=>{
        return backupSorted.indexOf(id)===index
    }) 
    return newBackup
}

// ---- test ----

const lastBackup = 1546300800

const changes = [
  [ 3, 1546301100 ],
  [ 2, 1546300800 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ]
]

console.log(getFilesToBackup(lastBackup, changes)) // => [ 1, 3 ]
// The file with id 1 has been modified twice
// after the last backup.

// The file with id 2 has not been modified after
// the last backup.

// The file with id 3 has been modified once
// after the last backup.

// We have to make a backup
// of the files 1 and 3.

console.log(getFilesToBackup(1546300600, [
    [ 1, 1546300800 ],
    [ 2, 1546300800 ],
    [ 1, 1546300900 ],
    [ 1, 1546301000 ],
    [ 3, 1546301100 ]
  ])) // => [ 1, 2, 3]

console.log(getFilesToBackup(1556300600, [
    [ 1, 1546300800 ],
    [ 2, 1546300800 ],
    [ 1, 1546300900 ],
    [ 1, 1546301000 ],
    [ 3, 1546301100 ]
  ])) // => [ ]

  console.log(getFilesToBackup(1556300600, [])) // => [ ]