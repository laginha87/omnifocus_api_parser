 declare class ActiveObject {



  /**
  *   If `true`, then this object is considered active, otherwise the object is considered dropped.
  **/
active : Boolean

    /**
  *   Returns `true` if this object and all its containers are active.
  **/
readonly effectiveActive : Boolean


}
 declare class Alert {
  constructor(title: String, message: String)
  /**
  *   Displays the alert. If no options have yet been added, a default "OK" option is added. Once the user selects an option, the alert is dismissed. If a callback function was supplied, it is invoked with the zero-based index of the selected option as its argument. A `Promise` is returned as well, which may also be used to collect the result of the `Alert`.
  **/
show(callback: Function|null) : Promise<Number>

   /**
  *   Adds an option button to the alert.
  **/
addOption(string: String)




}
 declare class Application {

  /**
  *   Attempts to open the specified document and return a reference to it asynchronously. If the document is already open, the reference is passed along. Note that due to platform sandboxing restrictions, opening the document may fail if the application doesn't have currently permission to access the given `URL`. The document, if any, that is associated with the calling script can be passed along to help grant permission to open the new document.
  **/
openDocument(from: Document|null, url: URL, completed: Function)


  /**
  *   The internal build version number for the app. See also `userVersion`.
  **/
readonly buildVersion : Version

    /**
  *   Whether the Command key is currently down.
  **/
readonly commandKeyDown : Boolean

    /**
  *   Whether the Control key is currently down.
  **/
readonly controlKeyDown : Boolean

    /**
  *   Application name.
  **/
readonly name : String

    /**
  *   Whether the Option key is currently down.
  **/
readonly optionKeyDown : Boolean

    /**
  *   Returns a string describing the current platform, currently `"iOS"` or `"macOS"`.
  **/
readonly platformName : String

    /**
  *   Whether the Shift key is currently down.
  **/
readonly shiftKeyDown : Boolean

    /**
  *   The user-visible version number for the app. See also `buildVersion`.
  **/
readonly userVersion : Version

    /**
  *   Deprecated: Recommend using either `userVersion` or `buildVersion`.
  **/
readonly version : String


}
 declare class ApplyResult {




  /**
  *   The descendants of the current item are skipped.
  **/
 static readonly SkipChildren : ApplyResult

    /**
  *   The unvisited peers of the current item are skipped.
  **/
 static readonly SkipPeers : ApplyResult

    /**
  *   The call to `apply` terminates with no further items being visited.
  **/
 static readonly Stop : ApplyResult

    /**
  *   An array of all items of this enumeration.
  **/
 static readonly all : Array<ApplyResult>

}
 declare class Calendar {

  /**
  *   Returns a new `Date` by adding the given `DateComponents`, or null if no date could be calculated.
  **/
dateByAddingDateComponents(date: Date, components: DateComponents) : Date|null

   /**
  *   Returns a new `Date` from the given `DateComponents`, or null if no date could be calculated.
  **/
dateFromDateComponents(components: DateComponents) : Date|null

   /**
  *   Returns a new `DateComponents` for the given `Date`.
  **/
dateComponentsFromDate(date: Date) : DateComponents

   /**
  *   Returns the difference from the start `Date` to the end `Date` as a `DateComponents`.
  **/
dateComponentsBetweenDates(start: Date, end: Date) : DateComponents

   /**
  *   Returns a `Date` for the first moment of the day containing the given `Date` according to this `Calendar`.
  **/
startOfDay(date: Date) : Date


  /**
  *   The ISO identifier for the calendar.
  **/
readonly identifier : String

    /**
  *   The locale of the calendar.
  **/
readonly locale : Locale|null

    /**
  *   The time zone of the calendar.
  **/
readonly timeZone : TimeZone

  /**
  *
  **/
 static readonly buddhist : Calendar

    /**
  *
  **/
 static readonly chinese : Calendar

    /**
  *
  **/
 static readonly coptic : Calendar

    /**
  *   The user's preferred calendar
  **/
 static readonly current : Calendar

    /**
  *
  **/
 static readonly ethiopicAmeteAlem : Calendar

    /**
  *
  **/
 static readonly ethiopicAmeteMihret : Calendar

    /**
  *   The Gregorian calendar.
  **/
 static readonly gregorian : Calendar

    /**
  *
  **/
 static readonly hebrew : Calendar

    /**
  *
  **/
 static readonly indian : Calendar

    /**
  *
  **/
 static readonly islamic : Calendar

    /**
  *
  **/
 static readonly islamicCivil : Calendar

    /**
  *
  **/
 static readonly islamicTabular : Calendar

    /**
  *
  **/
 static readonly islamicUmmAlQura : Calendar

    /**
  *
  **/
 static readonly iso8601 : Calendar

    /**
  *
  **/
 static readonly japanese : Calendar

    /**
  *
  **/
 static readonly persian : Calendar

    /**
  *
  **/
 static readonly republicOfChina : Calendar

}
 declare class Color {

  /**
  *   Returns a new color that is a linear combination of the receiver and `fraction` of the other color (so, a fraction of 1.0 would just return the `otherColor`. If the colors cannot be blended (for example, if they cannot be converted to the same colorspace), then `null` is returned.
  **/
blend(otherColor: Color, fraction: Number) : Color|null

  /**
  *   Makes a new color in the `RGB` colorspace, with the given components. If the alpha component is not given, 1.0 is used.
  **/
 static RGB(r: Number, g: Number, b: Number, a: Number|null) : Color

   /**
  *   Makes a new color in the `HSB` colorspace, with the given components. If the alpha component is not given, 1.0 is used.
  **/
 static HSB(h: Number, s: Number, b: Number, a: Number|null) : Color

   /**
  *   Makes a new color in the `White` colorspace, with the given components. If the alpha component is not given, 1.0 is used.
  **/
 static White(w: Number, a: Number|null) : Color

  /**
  *   Returns the alpha component of the color.
  **/
readonly alpha : Number

    /**
  *   Returns the blue component of the color, after converting to a `RGB` colorspace.
  **/
readonly blue : Number

    /**
  *   Returns the brightness component of the color, after converting to a `HSB` colorspace.
  **/
readonly brightness : Number

    /**
  *   Returns the colorspace of the instance.
  **/
readonly colorSpace : ColorSpace

    /**
  *   Returns the green component of the color, after converting to a `RGB` colorspace.
  **/
readonly green : Number

    /**
  *   Returns the hue component of the color, after converting to a `HSB` colorspace.
  **/
readonly hue : Number

    /**
  *   Returns the red component of the color, after converting to a `RGB` colorspace.
  **/
readonly red : Number

    /**
  *   Returns the saturation component of the color, after converting to a `HSB` colorspace.
  **/
readonly saturation : Number

    /**
  *   Returns the white component of the color, after converting to a `White` colorspace.
  **/
readonly white : Number

  /**
  *   A color in the `White` colorspace with white component of 0.0.
  **/
 static readonly black : Color

    /**
  *   A color in the `RGB` colorspace with components (0, 0, 1, 1).
  **/
 static readonly blue : Color

    /**
  *   A color in the `RGB` colorspace with components (0.6, 0.4, 0.2, 1).
  **/
 static readonly brown : Color

    /**
  *   A color in the `White` colorspace with white component of 0.0 and alpha of 0.0 ("transparent black").
  **/
 static readonly clear : Color

    /**
  *   A color in the `RGB` colorspace with components (0, 1, 1, 1).
  **/
 static readonly cyan : Color

    /**
  *   A color in the `White` colorspace with white component of 0.333.
  **/
 static readonly darkGray : Color

    /**
  *   A color in the `White` colorspace with white component of 0.5.
  **/
 static readonly gray : Color

    /**
  *   A color in the `RGB` colorspace with components (0, 1, 0, 1).
  **/
 static readonly green : Color

    /**
  *   A color in the `White` colorspace with white component of 0.667.
  **/
 static readonly lightGray : Color

    /**
  *   A color in the `RGB` colorspace with components (1, 0, 1, 1).
  **/
 static readonly magenta : Color

    /**
  *   A color in the `RGB` colorspace with components (1, 0.5, 0, 1).
  **/
 static readonly orange : Color

    /**
  *   A color in the `RGB` colorspace with components (1, 0, 1, 1).
  **/
 static readonly purple : Color

    /**
  *   A color in the `RGB` colorspace with components (1, 0, 0, 1).
  **/
 static readonly red : Color

    /**
  *   A color in the `White` colorspace with white component of 1.0.
  **/
 static readonly white : Color

    /**
  *   A color in the `RGB` colorspace with components (1, 1, 0, 1).
  **/
 static readonly yellow : Color

}
 declare class ColorSpace {




  /**
  *   A colorspace with cyan, magenta, yellow, black, and alpha components.
  **/
 static readonly CMYK : ColorSpace

    /**
  *   A colorspace with hue, saturation, and value (or brightness) components.
  **/
 static readonly HSB : ColorSpace

    /**
  *   A space for named colors, like system defined colors, or specific color palette spaces.
  **/
 static readonly Named : ColorSpace

    /**
  *   A colorspace that wraps a pattern image.
  **/
 static readonly Pattern : ColorSpace

    /**
  *   The sRGB colorspace with red, green, blue, and alpha components.
  **/
 static readonly RGB : ColorSpace

    /**
  *   A colorspace with white and alpha components.
  **/
 static readonly White : ColorSpace

    /**
  *   An array of all items of this enumeration.
  **/
 static readonly all : Array<ColorSpace>

}
 declare class Console {

  /**
  *   Appends a line to the application console formed by concatenating the given `message` (after converting it to a `String`), any additional arguments separated by spaces, and finally a newline.
  **/
log(message: Object, additional: Array<Object>|null)

   /**
  *
  **/
error(message: Object, additional: Array<Object>|null)

   /**
  *
  **/
info(message: Object, additional: Array<Object>|null)

   /**
  *   Just calls `Console.log`, currently.
  **/
warn(message: Object, additional: Array<Object>|null)

   /**
  *   Clears the console in the user-visible window.
  **/
clear()




}
 declare class ContentTree {





}
 declare class Credentials {
  constructor()
  /**
  *   Looks up the current credentials for a given service identifier. If credentials have previously been stored, an object will be returned containing `"user"` an `"password"` properties.
  **/
read(service: String) : Object|null

   /**
  *   Creates or updates an existing credential, storing the username and password for this service securely in the Keychain.
  **/
write(service: String, username: String, password: String)

   /**
  *   Deletes any currently stored credentials for the specified service
  **/
remove(service: String)




}
 declare class Data {

  /**
  *   Convert to a `String`, assuming that this `Data` is encoded as UTF8.
  **/
toString() : String

   /**
  *   Convert to a Base-64 encoded string.
  **/
toBase64() : String

  /**
  *   Convert from a `String` to the UTF8 encoding of that string as `Data`
  **/
 static fromString(string: String) : Data

   /**
  *
  **/
 static fromBase64(string: String) : Data

  /**
  *   Number of bytes in this data.
  **/
readonly length : Number

    /**
  *
  **/
readonly toObject : Object|null


}
 declare class Database {

  /**
  *   Returns the first top-level `Tag` with the given name, or `null`.
  **/
tagNamed(name: String) : Tag|null

   /**
  *   Returns the first top-level `Folder` with the given name, or `null`.
  **/
folderNamed(name: String) : Folder|null

   /**
  *   Returns the first top-level `Project` with the given name, or `null`.
  **/
projectNamed(name: String) : Project|null

   /**
  *   Returns each existing `Project` that Smart Matches the given `search`. The result will be in the same order and have the same projects as would be found when searching this string in the Quick Open window.
  **/
projectsMatching(search: String) : Array<Project>

   /**
  *   Returns each existing `Folder` that Smart Matches the given `search`. The result will be in the same order and have the same folders as would be found when searching this string in the Quick Open window.
  **/
foldersMatching(search: String) : Array<Folder>

   /**
  *   Returns each existing `Tag` that Smart Matches the `search`. The result will be in the same order and have the same tags as would be found when searching this string in the Quick Open window.
  **/
tagsMatching(search: String) : Array<Tag>

   /**
  *   Returns the first top-level `Task` in the inbox with the given name, or `null`.
  **/
taskNamed(name: String) : Task|null

   /**
  *   Saves any unsaved changes to disk. If sync is enabled and there were unsaved changes, this also triggers a sync request.
  **/
save()

   /**
  *   Moves tasks to a different location.
  **/
moveTasks(tasks: Array<Task>, position: Project|Task|Task.ChildInsertionLocation)

   /**
  *   Makes copies of the tasks and returns the new copies. The order of the inputs is not considered and the copies are returned in library order of the originals.
  **/
duplicateTasks(tasks: Array<Task>, position: Project|Task|Task.ChildInsertionLocation) : TaskArray

   /**
  *   Converts tasks to new projects at the specified location.
  **/
convertTasksToProjects(tasks: Array<Task>, position: Folder|Folder.ChildInsertionLocation) : Array<Project>

   /**
  *   Moves sections to a different location.
  **/
moveSections(sections: Array<Project>|Folder, position: Folder|Folder.ChildInsertionLocation)

   /**
  *   Makes copies of the sections and returns the new copies. The order of the inputs is not considered and the copies are returned in library order of the originals.
  **/
duplicateSections(sections: Array<Project>|Folder, position: Folder|Folder.ChildInsertionLocation) : SectionArray

   /**
  *   Moves tags to a different location.
  **/
moveTags(tags: Array<Tag>, position: Tag|Tag.ChildInsertionLocation)

   /**
  *   Makes copies of the tags and returns the new copies. The order of the inputs is not considered and the copies are returned in library order of the originals.
  **/
duplicateTags(tags: Array<Tag>, position: Tag|Tag.ChildInsertionLocation) : TagArray

   /**
  *   Processes inbox items that have the required information to move into their proposed containers, performs any delayed filtering, and deletes empty items.
  **/
cleanUp()

   /**
  *   Undoes the last undoable action, or throws an error if there are no undoable actions.
  **/
undo()

   /**
  *   Redoes the next redoable action, or throws an error if there are no redoable actions.
  **/
redo()

   /**
  *   Removes the object from the Database.
  **/
deleteObject(object: DatabaseObject)

   /**
  *   Copies the given tasks to the pasteboard in a variety of formats.
  **/
copyTasksToPasteboard(tasks: Array<Task>, pasteboard: Pasteboard)

   /**
  *   Returns true if the pasteboard contains a type that can be imported as tasks.
  **/
canPasteTasks(pasteboard: Pasteboard) : Boolean

   /**
  *   Reads the most relevant pasteboard type and imports them as tasks. The tasks should then be moved to the desired destination.
  **/
pasteTasksFromPasteboard(pasteboard: Pasteboard) : Array<Task>


  /**
  *   Returns true if there are redoable actions.
  **/
readonly canRedo : Boolean

    /**
  *   Returns true if there are undoable actions.
  **/
readonly canUndo : Boolean

    /**
  *
  **/
readonly document : DatabaseDocument|null

    /**
  *   Returns a flat array of all folders in the database, sorted by their order in the database.
  **/
readonly flattenedFolders : FolderArray

    /**
  *   Returns a flat array of all projects in the database, sorted by their order in the database.
  **/
readonly flattenedProjects : ProjectArray

    /**
  *   Returns a flat array of all folders and project in the database, sorted by their order in the database.
  **/
readonly flattenedSections : SectionArray

    /**
  *   Returns a flat array of all tags in the database, sorted by their order in the database.
  **/
readonly flattenedTags : TagArray

    /**
  *   Returns a flat array of all tasks in the database, including inbox items, root tasks for projects, task groups and individual tasks. Tasks are sorted by their order in the database, with the inbox preceeding the library.
  **/
readonly flattenedTasks : TaskArray

    /**
  *   Returns the top-level folders in the database.
  **/
readonly folders : FolderArray

    /**
  *   Returns a copy of the `Task`s currently in the inbox.
  **/
readonly inbox : Inbox

    /**
  *   Returns the top-level folders and projects in the database.
  **/
readonly library : Library

    /**
  *   Returns the top-level folders in the database.
  **/
readonly projects : ProjectArray

    /**
  *
  **/
readonly settings : Settings

    /**
  *   Returns the top-level tags in the database.
  **/
readonly tags : Tags


}
 declare class DatabaseDocument {

  /**
  *   Returns a `Promise` that will yield either a newly created and displayed `Window` or an error. On macOS, this method respects the System Preference governing new window behavior (tab vs. window). That preference is accessible at `System Preferences` > `Dock` > `Prefer tabs when opening documents`.
  **/
newWindow() : Promise<DocumentWindow>

   /**
  *   Returns a `Promise` that will yield either a new tab adjacent to `window` or an error. This is not available on iOS.
  **/
newTabOnWindow(window: DocumentWindow) : Promise<DocumentWindow>


  /**
  *
  **/
readonly windows : Array<DocumentWindow>


}
 declare class DatabaseObject {



  /**
  *   Returns the identifier for this object.
  **/
readonly id : ObjectIdentifier


}
 declare class DateComponents {
  constructor()


  /**
  *
  **/
readonly date : Date|null

    /**
  *
  **/
day : Number|null

    /**
  *
  **/
era : Number|null

    /**
  *
  **/
hour : Number|null

    /**
  *
  **/
minute : Number|null

    /**
  *
  **/
month : Number|null

    /**
  *
  **/
nanosecond : Number|null

    /**
  *
  **/
second : Number|null

    /**
  *
  **/
timeZone : TimeZone|null

    /**
  *
  **/
year : Number|null


}
 declare class DatedObject {



  /**
  *   Returns the date the object was first saved. If the object is newly inserted, this will be `null`. For newly inserted objects, the `added` property may be set (but once an object is saved for the first time, the property is read-only).
  **/
added : Date|null

    /**
  *   Returns the date the object was most recently modified. If the object is newly inserted, this will be `null`. For newly inserted objects, the `modified` property may be set (but once an object is saved for the first time, the property is read-only).
  **/
modified : Date|null


}
 declare class Decimal {

  /**
  *   Converts the `Decimal` to a `String` representation.
  **/
toString() : String

   /**
  *   Generates a new `Decimal` by adding the argument and the receiver.
  **/
add(number: Decimal) : Decimal

   /**
  *   Generates a new `Decimal` by subtracting the argument from the receiver.
  **/
subtract(number: Decimal) : Decimal

   /**
  *   Generates a new `Decimal` by multiplying the argument and the receiver.
  **/
multiply(number: Decimal) : Decimal

   /**
  *   Generates a new `Decimal` by dividing the receiver by the argument.
  **/
divide(number: Decimal) : Decimal

   /**
  *   Compares the receiver and argument. If the receiver is less than the argument, -1 is returned. If the receiver is greater than the argument, 1 is returned. Otherwise, 0 is returned. `notANumber` is considered less than any valid number, and equal to itself.
  **/
compare(number: Decimal) : Number

   /**
  *   Returns `true` if the receiver and argument represent the same number (or both are `notANumber`), and `false` otherwise.
  **/
equals(number: Decimal) : Boolean

  /**
  *   Parses the given string into a `Decimal`. If the string cannot be parsed, `notANumber` is returned.
  **/
 static fromString(string: String) : Decimal


  /**
  *   Returns the maximum representable `Decimal` value.
  **/
 static readonly maximum : Decimal

    /**
  *   Returns the minimum representable `Decimal` value.
  **/
 static readonly minimum : Decimal

    /**
  *   Returns a `Decimal` that represents a non-number value. Any arithmetic operations involving non-number values will return `notANumber`.
  **/
 static readonly notANumber : Decimal

    /**
  *   Returns a `Decimal` representing one.
  **/
 static readonly one : Decimal

    /**
  *   Returns a `Decimal` representing zero.
  **/
 static readonly zero : Decimal

}
 declare class Device {



  /**
  *   A convenience that returns `true` on iPhone and iPad devices
  **/
readonly iOS : Boolean

    /**
  *   A convenience that returns `true` only on iPad devices, but not on iPhone devices.
  **/
readonly iPad : Boolean

    /**
  *   A convenience that returns `true` only on Mac devices.
  **/
readonly mac : Boolean

    /**
  *   The current operation system version running on the device
  **/
readonly operatingSystemVersion : Version

    /**
  *   The general type of the current device
  **/
readonly type : DeviceType|null

  /**
  *   The device the current application is running on.
  **/
 static readonly current : Device

}
 declare class DeviceType {




  /**
  *   An array of all items of this enumeration.
  **/
 static readonly all : Array<DeviceType>

    /**
  *   An iPad
  **/
 static readonly iPad : DeviceType

    /**
  *   An iPhone
  **/
 static readonly iPhone : DeviceType

    /**
  *   A Mac device
  **/
 static readonly mac : DeviceType

}
 declare class Document {

  /**
  *   Close this document. If for some reason the document cannot be closed, the `didCancel` function may be called at some point in the future, with the original document as the single argument. For example, on the Mac the user may review unsaved changes and may cancel the close operation. If the document is closed, the `didCancel` function will not be called at all.
  **/
close(didCancel: Function|null)

   /**
  *   Save this document.
  **/
save()

   /**
  *   Deprecated: Please use `makeFileWrapper()` instead.
  **/
fileWrapper(type: String|null) : FileWrapper

   /**
  *   Generates a `FileWrapper` representing the contents of the document formatted as the specified type, or its current `fileType` if a `null` is passed for the type. Returns a `Promise` that will yield the file wrapper or an error. The returned file wrapper will have a name based off the given `baseName` and the default path extension for the requested file type.
  **/
makeFileWrapper(baseName: String, type: String|null) : Promise<FileWrapper>

   /**
  *   Undo the last done action.
  **/
undo()

   /**
  *   Redo the last undone action.
  **/
redo()

   /**
  *   Presents the document, ordering the window forward on macOS, and possibly closing the existing document and opening the new on on iOS.
  **/
show(resultFunction: Function|null)

  /**
  *   Create a new document, which can be populated with data and then presented. On iOS, if the document is not presented by the time the `resultFunction` returns, it will be closed. On macOS, the document will be left around and accessible to the running script. `resultFunction` is executed before any functions tethered to the result Promise are executed. Returns a `Promise` that will yield the new document or an error.
  **/
 static makeNew(resultFunction: Function|null) : Promise<Document>

   /**
  *   Create a new document and presents it. Returns a `Promise` that will yield the new document or an error.
  **/
 static makeNewAndShow(resultFunction: Function|null) : Promise<Document>

  /**
  *   Whether there are currently any actions that can be redone.
  **/
readonly canRedo : Boolean

    /**
  *   Whether there are currently any actions that can be undone.
  **/
readonly canUndo : Boolean

    /**
  *   The file type identifier the document uses when saving, if set.
  **/
readonly fileType : String|null

    /**
  *   Document name.
  **/
readonly name : String|null

    /**
  *   A list of all of the file types that this document can be written as.
  **/
readonly writableTypes : Array<String>


}
 declare class DocumentWindow {

  /**
  *   Clears the current selection and then selects the given objects, if present in the current perspective of this window. On iOS, if `objects` contains more than one object, this will put the outline view into edit mode to accomodate multiple selection.
  **/
selectObjects(objects: Array<DatabaseObject>)

   /**
  *   Returns a `ForecastDay` object that encompasses `date`. This will throw an error if Forecast is not the current perspective in this window.
  **/
forecastDayForDate(date: Date) : ForecastDay

   /**
  *   Selects the days in the Forecast picker represented by `days`. On iOS, only the first day is selected, and the rest are ignored. This will throw an error if Forecast is not the current perspective in this window.
  **/
selectForecastDays(days: Array<ForecastDay>)


  /**
  *   The tree of nodes representing the content area of the window.
  **/
readonly content : ContentTree|null

    /**
  *   The Folders and Projects that the window is focusing on, limiting the sidebar to show only these items. Focus is only supported on macOS- getting or setting this on iOS results in an error.
  **/
focus : SectionArray|null

    /**
  *   Whether or not this window is a tab. This is not available on iOS.
  **/
readonly isTab : Boolean

    /**
  *
  **/
perspective : Perspective.BuiltIn|Perspective.Custom|null

    /**
  *   The current selection in the window.
  **/
readonly selection : Selection

    /**
  *   The tree of nodes representing the sidebar of the window.
  **/
readonly sidebar : SidebarTree|null

    /**
  *   The array of sibling `Window` objects that are in tabs alongside this `Window`. If `isTab` is false, then this will return an array that solely contains this `Window`. This is not available on iOS.
  **/
readonly tabGroupWindows : Array<DocumentWindow>


}
 declare class Email {
  constructor()
  /**
  *   Presents the generated email to the user for them to send (or discard). On iOS, any included attachment `FileWrapper`s that are directories will be converted to Zip files.
  **/
generate()


  /**
  *
  **/
blindCarbonCopy : String|null

    /**
  *
  **/
body : String|null

    /**
  *
  **/
carbonCopy : String|null

    /**
  *
  **/
fileWrappers : Array<FileWrapper>

    /**
  *
  **/
receiver : String|null

    /**
  *
  **/
subject : String|null


}
 declare class FilePicker {
  constructor()
  /**
  *   Presents the system file selection interface to the user, allowing them to choose one or more files of the given types. The returned `Promise` will yield the chosen `URL`s on success. If the user cancels chosing, the `Promise` will be rejected. Note that even when picking a single file or folder, the result will be an array of `URL`s.
  **/
show() : Promise<Array<URL>>


  /**
  *   If `true`, then folders may be selected, but not files. In this case, `types` is ignored. Defaults to `false`.
  **/
folders : Boolean

    /**
  *   A message to display describing what files are being picked. This is currently only supported on macOS.
  **/
message : String

    /**
  *   If `true`, then multiple files may be selected. Defaults to `false`.
  **/
multiple : Boolean

    /**
  *   The file types that will be allowed. If `null`, all file types will be allowed. Defaults to `null`.
  **/
types : Array<TypeIdentifier>|null


}
 declare class FileSaver {
  constructor()
  /**
  *   Presents the system file saving interface to the user, allowing them to choose a location and file name to save the file wrapper. The returned `Promise` will yield the chosen `URL` on success. If the user cancels chosing, the `Promise` will be rejected.
  **/
show(fileWrapper: FileWrapper) : Promise<URL>


  /**
  *   A message to display describing what file is being saved. This is currently only supported on macOS.
  **/
message : String

    /**
  *   The label shown next to the user-editable file name field. This is currently only supported on macOS.
  **/
nameLabel : String

    /**
  *   The prompt shown on the the save button. This is currently only supported on macOS.
  **/
prompt : String

    /**
  *   The file types that will be allowed. If `null`, all file types will be allowed. Defaults to `null`.
  **/
types : Array<TypeIdentifier>|null


}
 declare class FileWrapper {

  /**
  *   Returns the unique file name that will be used for the given child `FileWrapper`, or `null` if this file wrapper is not a child of the receiver.
  **/
filenameForChild(child: FileWrapper) : String|null

  /**
  *   Returns a new `FileWrapper` that represents a flat file containing the given data.
  **/
 static wthContents(name: String|null, contents: Data) : FileWrapper

   /**
  *   Returns a new `FileWrapper` that represents a directory with the given child file wrappers. Each child file wrapper must have a unique name specified.
  **/
 static wthChildren(name: String|null, children: Array<FileWrapper>) : FileWrapper

  /**
  *   Returns an `Array` of child `FileWrappers`, if this represents a directory. Otherwise, an empty array is returned.
  **/
readonly children : Array<FileWrapper>

    /**
  *   Returns the regular file contents of the wrapper, if this represents a regular file. Otherwise, `null` is returned.
  **/
readonly contents : Data|null

    /**
  *   Returns the destination if this represents a symbolic link. Otherwise, `null` is returned.
  **/
readonly destination : URL|null

    /**
  *   Returns the actual file name that was last read for this file wrapper. Depending on the names of other sibling wrappers, this may not be what file name will be written.
  **/
filename : String|null

    /**
  *   Returns the preferred file name that should be used when writing the file wrapper if no other file in the same parent directory wrapper is in use.
  **/
preferredFilename : String|null

    /**
  *   Returns the type of this `FileWrapper`.
  **/
readonly type : FileWrapper.Type


}
declare namespace FileWrapper {
          class Type {




  /**
  *   A `FileWrapper` that represents a directory with zero or more child wrappers.
  **/
 static readonly Directory : FileWrapper.Type

    /**
  *   A `FileWrapper` that represents a regular file with data contents.
  **/
 static readonly File : FileWrapper.Type

    /**
  *   A `FileWrapper` that represents a symbolic link to another location.
  **/
 static readonly Link : FileWrapper.Type

    /**
  *   An array of all items of this enumeration.
  **/
 static readonly all : Array<FileWrapper.Type>

}

      } declare class Folder {
  constructor(name: String, position: Folder|Folder.ChildInsertionLocation|null)
  /**
  *   Returns the first child `Folder` with the given name that is contained directly in this folder, or `null`.
  **/
folderNamed(name: String) : Folder|null

   /**
  *   Returns the first child `Project` of this folder with the given name, or `null`.
  **/
projectNamed(name: String) : Project|null

   /**
  *   Returns the first child `Folder` or `Project` in this folder with the given name, or `null`.
  **/
sectionNamed(name: String) : Project|Folder|null

   /**
  *   An alias for `sectionNamed`.
  **/
childNamed(name: String) : Project|Folder|null

   /**
  *   Calls the given function for this `Folder` and recursively into any child folders and projects. The tasks within any projects are not descended into.
  **/
apply(fn: Function) : ApplyResult|null

  /**
  *   Returns the `Folder` with the specified identifier, or `null` if no such folder exists.
  **/
 static byIdentifier(identifier: String) : Folder|null

  /**
  *   Returns a location referring to the position just after this folder within its containing `Folder` or `Database`.
  **/
readonly after : Folder.ChildInsertionLocation

    /**
  *   Returns a location referring to the position just before this folder within its containing `Folder` or `Database`.
  **/
readonly before : Folder.ChildInsertionLocation

    /**
  *   Returns a location referring to the the beginning of the contained projects and folders in this folder.
  **/
readonly beginning : Folder.ChildInsertionLocation

    /**
  *   An alias for `sections`.
  **/
readonly children : SectionArray

    /**
  *   Returns a location referring to the the ending of the contained projects and folders in this folder.
  **/
readonly ending : Folder.ChildInsertionLocation

    /**
  *   An alias for `flattenedSections`.
  **/
readonly flattenedChildren : SectionArray

    /**
  *   Returns a flat array of all folders in this folder, sorted by their order in the database.
  **/
readonly flattenedFolders : FolderArray

    /**
  *   Returns a flat array of all projects in this folder, sorted by their order in the database.
  **/
readonly flattenedProjects : ProjectArray

    /**
  *   Returns a flat array of all folders and project in this folder, sorted by their order in the database.
  **/
readonly flattenedSections : SectionArray

    /**
  *   Returns the folders contained directly as children of this folder.
  **/
readonly folders : FolderArray

    /**
  *   The name of the folder.
  **/
name : String

    /**
  *   The parent `Folder` which contains this folder.
  **/
readonly parent : Folder|null

    /**
  *   Returns the projects contained directly as children of this folder.
  **/
readonly projects : ProjectArray

    /**
  *   Returns a sorted list of the folders and projects contained directly within this folder.
  **/
readonly sections : SectionArray

    /**
  *   The folder's status.
  **/
status : Folder.Status


}
declare namespace Folder {
          class ChildInsertionLocation {





}

      }declare namespace Folder {
          class Status {




  /**
  *   The folder is active.
  **/
 static readonly Active : Folder.Status

    /**
  *   The folder has been dropped.
  **/
 static readonly Dropped : Folder.Status

    /**
  *   An array of all items of this enumeration.
  **/
 static readonly all : Array<Folder.Status>

}

      } declare class FolderArray {

  /**
  *   Returns the first `Folder` contained directly in this array with the given name.
  **/
byName(name: String) : Folder|null




}
 declare class ForecastDay {

  /**
  *   The status of the badge on this forecast day.
  **/
badgeKind() : ForecastDay.Status


  /**
  *   The number of available tasks on this forecast day.
  **/
readonly badgeCount : Number

    /**
  *   The date this forecast day represents. If this day's kind is `Past` or `DistantFuture` the date returned will be years from the current time.
  **/
readonly date : Date

    /**
  *   The number of remaining deferred tasks on this forecast day.
  **/
readonly deferredCount : Number

    /**
  *
  **/
readonly kind : ForecastDay.Kind

    /**
  *
  **/
readonly name : String

  /**
  *   Determines whether or not badges on Forecast days include items that are not yet available.
  **/
 static badgeCountsIncludeDeferredItems : Boolean

}
declare namespace ForecastDay {
          class Kind {




  /**
  *   The node represents a specific day in the Forecast week or month grid.
  **/
 static readonly Day : ForecastDay.Kind

    /**
  *   The node represents all days more than a year from now.
  **/
 static readonly DistantFuture : ForecastDay.Kind

    /**
  *   The node represents a month within the next year.
  **/
 static readonly FutureMonth : ForecastDay.Kind

    /**
  *   The node represents all days in the past.
  **/
 static readonly Past : ForecastDay.Kind

    /**
  *   The node represents today.
  **/
 static readonly Today : ForecastDay.Kind

    /**
  *   An array of all items of this enumeration.
  **/
 static readonly all : Array<ForecastDay.Kind>

}

      }declare namespace ForecastDay {
          class Status {




  /**
  *   There is at least one available task on the node's day, but no task is due soon or overdue. The node's badgeCount is the number of available tasks.
  **/
 static readonly Available : ForecastDay.Status

    /**
  *   There is at least one available task on the node's day, and at least one task due that day is due soon, but no tasks due that day are overdue. The node's badgeCount is the number of available tasks.
  **/
 static readonly DueSoon : ForecastDay.Status

    /**
  *   There are no available tasks on the node's day. The node's badgeCount is guaranteed to be zero.
  **/
 static readonly NoneAvailable : ForecastDay.Status

    /**
  *   There is at least one available task on the node's day, and at least one task due that day is overdue. The node's badgeCount is the number of available tasks.
  **/
 static readonly Overdue : ForecastDay.Status

    /**
  *   An array of all items of this enumeration.
  **/
 static readonly all : Array<ForecastDay.Status>

}

      } declare class Form {
  constructor()
  /**
  *   Adds the new `Field` to the `Form`, at the indicated position, or at the end if no position is specified. If the field has a default value, it will be added to the `values` result object immediately.
  **/
addField(field: Form.Field, index: Number|null)

   /**
  *   Removes the `Field from the `Form`. Any entry in the `values` for this field will be removed as well.
  **/
removeField(field: Form.Field)

   /**
  *   Present the `Form` to the user, and return a `Promise` to be fullfilled or rejected when the user commits or cancels the form.
  **/
show(title: String, confirmTitle: String) : Promise<Form>


  /**
  *   The current `Field` instances in the form, which will be visible to the user entering input.
  **/
readonly fields : Array<Form.Field>

    /**
  *   A function to check whether the entered values are acceptable. The form to validate is passed as the argument and the function is expected to return a boolean result or null to perform default validation. If an `Error` is thrown, it's message will be displayed in the form as the reason for validation failure. Note that the validation function may add or remove fields and update entries in the `values` object (which will cause the interface to be updated). This is called any time the user edits values, or a field is added or removed. If no `validate` function is specified or it returns `null`, some per-field default validation will be performed (see `Form.Field.Option`. If the `validate` function returns a boolean result, no default validation will be performed.
  **/
validate : Function|null

    /**
  *   An object with the collected values for each field, stored under the key for that field.
  **/
readonly values : Object


}
declare namespace Form {
          class Field {



  /**
  *   Human readable string used as the label for this field.
  **/
readonly displayName : String|null

    /**
  *   Key to use when storing the value for this field in the containing form's `values` object.
  **/
readonly key : String


}
 namespace Field {
          class Checkbox {
  constructor(key: String, displayName: String|null, value: Boolean|null)




}

      } namespace Field {
          class Date {
  constructor(key: String, displayName: String|null, value: Date|null, formatter: Formatter.Date|null)




}

      } namespace Field {
          class MultipleOptions {
  constructor(key: String, displayName: String|null, options: Array<Object>, names: Array<String>|null, selected: Array<Object>)




}

      } namespace Field {
          class Option {
  constructor(key: String, displayName: String|null, options: Array<Object>, names: Array<String>|null, selected: Object|null, nullOptionTitle: String|null)


  /**
  *   If set to `true`, an option will be added to allow selecting `null`.
  **/
allowsNull : Boolean

    /**
  *   If `null` is allowed, this will be used for the title of that option. Otherwise a default title will be used.
  **/
nullOptionTitle : String|null


}

      } namespace Field {
          class Password {
  constructor(key: String, displayName: String|null, value: String|null)




}

      } namespace Field {
          class String {
  constructor(key: String, displayName: String|null, value: Object|null, formatter: Formatter|null)




}

      }
      } declare class Formatter {





}
declare namespace Formatter {
          class Date {

  /**
  *
  **/
stringFromDate(date: Date) : String

   /**
  *
  **/
dateFromString(string: String) : Date|null

  /**
  *   A formatter that will display dates according to the specified date and time formats selected in system settings.
  **/
 static wthStyle(dateStyle: Formatter.Date.Style, timeStyle: Formatter.Date.Style|null) : Formatter.Date

   /**
  *   Returns a formatter with a specific ICU date format and the user's current locale, calendar, and timeZone. See <http://userguide.icu-project.org/formatparse/datetime/> for details on date format strings.
  **/
 static wthFormat(format: String) : Formatter.Date

  /**
  *
  **/
calendar : Calendar

    /**
  *
  **/
readonly dateFormat : String

    /**
  *
  **/
locale : Locale

    /**
  *
  **/
timeZone : TimeZone

  /**
  *   Return a date formatter that produces ISO-8601 formatted dates, using the Gregorian calendar and the UTC time zone.
  **/
 static readonly iso8601 : Formatter.Date

}
 namespace Date {
          class Style {




  /**
  *   Use the user's "full" format as selected in system settings.
  **/
 static readonly Full : Formatter.Date.Style

    /**
  *   Use the user's "long" format as selected in system settings.
  **/
 static readonly Long : Formatter.Date.Style

    /**
  *   Use the user's "medium" format as selected in system settings.
  **/
 static readonly Medium : Formatter.Date.Style

    /**
  *   Use the user's "short" format as selected in system settings.
  **/
 static readonly Short : Formatter.Date.Style

    /**
  *   An array of all items of this enumeration.
  **/
 static readonly all : Array<Formatter.Date.Style>

}

      }
      }declare namespace Formatter {
          class Decimal {

  /**
  *   Format a `Decimal` as a string, based on the rules set on the formatter.
  **/
stringFromDecimal(number: Decimal) : String|null

   /**
  *   Parses a `Decimal` from a string, based on the rules set on the formatter. Returns `null` if the value was not recognized.
  **/
decimalFromString(string: String) : Decimal|null

  /**
  *   Returns a new formatter that will display the value as a currency value. An ISO currency code may be specified to pick a specific currency, or null may be passed to use the default currency for the user's locale. If the argument is not a valid currency code, an error will be thrown.
  **/
 static currency(code: String|null) : Formatter.Decimal

  /**
  *   The string to display between the whole portion of a number and the decimal portion.
  **/
decimalSeparator : String

    /**
  *   A format string to use for negative values.
  **/
negativeFormat : String

    /**
  *   A format string to use for positive values.
  **/
positiveFormat : String

    /**
  *   The string to display between groups of digits representing powers of a thousand.
  **/
thousandsSeparator : String|null

    /**
  *   The string to use when displaying a zero value. If this is `null`, the `positiveFormat` is used.
  **/
zeroSymbol : String|null

  /**
  *   Deprecated: Please use the `currencyCode` property on `Locale` instead.
  **/
 static readonly currencyCodes : Array<String>

    /**
  *   Returns a new formatter that can be configured with custom settings.
  **/
 static readonly custom : Formatter.Decimal

    /**
  *   Returns a new number formatter that will use both a decimal separator.
  **/
 static readonly decimal : Formatter.Decimal

    /**
  *   Returns a new number formatter that will display the value as a percentage.
  **/
 static readonly percent : Formatter.Decimal

    /**
  *   Returns a new number formatter that will display the value as a percentage with a decimal separator.
  **/
 static readonly percentWithDecimal : Formatter.Decimal

    /**
  *   Returns a new number formatter that will not use any separators.
  **/
 static readonly plain : Formatter.Decimal

    /**
  *   Returns a new number formatter that will use both a thousands and decimal separator.
  **/
 static readonly thousandsAndDecimal : Formatter.Decimal

}

      }declare namespace Formatter {
          class Duration {
  constructor()
  /**
  *
  **/
stringFromDecimal(number: Decimal) : String|null

   /**
  *
  **/
decimalFromString(string: String) : Decimal|null


  /**
  *
  **/
hoursPerDay : Number

    /**
  *
  **/
hoursPerWeek : Number

    /**
  *
  **/
useVerboseFormat : Boolean


}

      } declare class Image {





}
 declare class Inbox {

  /**
  *   Calls the given function for each `Task` in the `Inbox` and recursively into any child tasks.
  **/
apply(fn: Function) : ApplyResult|null


  /**
  *   A location that can be used when adding, duplicating, or moving tasks.
  **/
readonly beginning : Task.ChildInsertionLocation

    /**
  *   A location that can be used when adding, duplicating, or moving tasks.
  **/
readonly ending : Task.ChildInsertionLocation


}
 declare class Library {

  /**
  *   Calls the given function for each `Folder` and `Project` in the `Library` and recursively into any child folders. Note that the tasks in projects are not descended into.
  **/
apply(fn: Function) : ApplyResult|null


  /**
  *   Returns a location referring to the beginning of the top-level projects and folders in the database. (Reference this using `library.beginning`.)
  **/
readonly beginning : Folder.ChildInsertionLocation

    /**
  *   Returns a location referring to the ending of the top-level projects and folders in the database. (Reference this using `library.ending`.)
  **/
readonly ending : Folder.ChildInsertionLocation


}
 declare class LigatureStyle {




  /**
  *   Use all of the available ligatures.
  **/
 static readonly All : LigatureStyle

    /**
  *   Use ligatures that are required for proper rendering of text.
  **/
 static readonly Essential : LigatureStyle

    /**
  *   Use the default ligatures for the given script.
  **/
 static readonly Standard : LigatureStyle

    /**
  *   An array of all items of this enumeration.
  **/
 static readonly all : Array<LigatureStyle>

}
 declare class Locale {
  constructor(identifier: String)


  /**
  *   The calendar for the locale.
  **/
readonly calendar : Calendar

    /**
  *   The currency code for the locale.
  **/
readonly currencyCode : String|null

    /**
  *   The ISO locale identifier for this object.
  **/
readonly identifier : String

  /**
  *   The list of known ISO locale identifiers.
  **/
 static readonly identifiers : Array<String>

}
 declare class MenuItem {



  /**
  *   If true, a checkmark is displayed next to the `MenuItem`'s label.
  **/
checked : Boolean

    /**
  *   The string displayed to describe the `MenuItem`'s action.
  **/
label : String


}
 declare class NamedStyle {

  /**
  *   Removes the `NamedStyle` from the document. Any references to it are disconnected as well.
  **/
remove()


  /**
  *   Returns a `NamedStylePosition` that indicates the slot after this item.
  **/
readonly after : NamedStylePosition

    /**
  *   Returns a `NamedStylePosition` that indicates the slot before this item.
  **/
readonly before : NamedStylePosition

    /**
  *   A unique identifier for the style, which is suitable for long-lived references.
  **/
readonly identifier : String

    /**
  *   The name of the style that is presented in the interface.
  **/
name : String


}
declare namespace NamedStyle {
          class List {

  /**
  *   Makes a new `NamedStyle` at the end of the `NamedStyleList`, and optionally assigns it a name.
  **/
add(name: String|null) : NamedStyle

   /**
  *   Returns the first named style that has the specified `name`, or `null` if none do.
  **/
byName(name: String) : NamedStyle|null

   /**
  *   Returns the single named style with the specified `identifier`, or `null` if no style has that `identifier`.
  **/
byIdentifier(identifier: String) : NamedStyle|null

   /**
  *   Reorders the named styles within the `NamedStyleList`. This cannot be used to move styles between documents.
  **/
moveStyles(styles: Array<NamedStyle>, position: NamedStylePosition)

   /**
  *
  **/
duplicateStyles(styles: Array<NamedStyle>, position: NamedStylePosition) : Array<NamedStyle>


  /**
  *   Returns the list of all `NamedStyles`. Note that the order determine which attribute values are applied if two named styles have conflicting settings.
  **/
readonly all : Array<NamedStyle>

    /**
  *   Returns a `NamedStylePosition` that indicates the position before any existing named styles.
  **/
readonly beginning : NamedStylePosition

    /**
  *   Returns a `NamedStylePosition` that indicates the position before after existing named styles.
  **/
readonly end : NamedStylePosition


}

      } declare class NamedStylePosition {





}
 declare class ObjectIdentifier {



  /**
  *   Returns the constructor object that would be used for instances of the class for this `ObjectIdentifier`.
  **/
readonly objectClass : Object|null

    /**
  *   Returns the primary key of the object identifier.
  **/
readonly primaryKey : String


}
 declare class Pasteboard {

  /**
  *   The first type from the provided list which is available on the pasteboard, or `null` if none are available.
  **/
availableType(types: Array<TypeIdentifier>) : TypeIdentifier|null

   /**
  *   Appends the new items to the pasteboard.
  **/
addItems(items: Array<Pasteboard.Item>)

   /**
  *   Remove all items from the pasteboard.
  **/
clear()

   /**
  *   The `Data` representation for the given type in this pasteboard, or `null` if none is available.
  **/
dataForType(type: TypeIdentifier) : Data|null

   /**
  *   Set the `Data` representation for the given type in this pasteboard, replacing any previously set data.
  **/
setDataForType(data: Data, type: TypeIdentifier)

   /**
  *   The `String` representation for the given type in this pasteboard, or `null` if none is available.
  **/
stringForType(type: TypeIdentifier) : String|null

   /**
  *   Set the `String` representation for the given type in this pasteboard, replacing any previously set data.
  **/
setStringForType(string: String, type: TypeIdentifier)

  /**
  *   Creates a new unique pasteboard.
  **/
 static makeUnique() : Pasteboard

  /**
  *   Gets or sets the pasteboard content as a single URL.
  **/
URL : URL|null

    /**
  *   Gets or sets the pasteboard content as a list of URLs.
  **/
URLs : Array<URL>|null

    /**
  *   Gets or sets the pasteboard content as a single color.
  **/
color : Color|null

    /**
  *   Gets or sets the pasteboard content as a list of colors.
  **/
colors : Array<Color>|null

    /**
  *   Returns `true` if the pasteboard contains one or more colors.
  **/
readonly hasColors : Boolean

    /**
  *   Returns `true` if the pasteboard contains one or more images.
  **/
readonly hasImages : Boolean

    /**
  *   Returns `true` if the pasteboard contains one or more strings.
  **/
readonly hasStrings : Boolean

    /**
  *   Returns `true` if the pasteboard contains one or more URLs.
  **/
readonly hasURLs : Boolean

    /**
  *   Gets or sets the pasteboard content as a single image.
  **/
image : Image|null

    /**
  *   Gets or sets the pasteboard content as a list of images.
  **/
images : Array<Image>|null

    /**
  *   The array of individual items on the pasteboard, each potentially with their own set of types.
  **/
items : Array<Pasteboard.Item>

    /**
  *   Gets or sets the pasteboard content as a single plain-text string.
  **/
string : String|null

    /**
  *   Gets or sets the pasteboard content as a list of plain-text strings.
  **/
strings : Array<String>|null

    /**
  *   The list of pasteboard types currently available on the pasteboard.
  **/
readonly types : Array<TypeIdentifier>

  /**
  *   The `Pasteboard` used for user-initiated copy/paste support.
  **/
 static readonly general : Pasteboard

}
declare namespace Pasteboard {
          class Item {
  constructor()
  /**
  *   The `Data` representation for the given type in this pasteboard item, or `null` if none is available.
  **/
dataForType(type: TypeIdentifier) : Data|null

   /**
  *   Set the `Data` representation for the given type in this pasteboard item, replacing any previously set data.
  **/
setDataForType(data: Data, type: TypeIdentifier)

   /**
  *   The `String` representation for the given type in this pasteboard item, or `null` if none is available.
  **/
stringForType(type: TypeIdentifier) : String|null

   /**
  *   Set the `String` representation for the given type in this pasteboard item, replacing any previously set data.
  **/
setStringForType(string: String, type: TypeIdentifier)


  /**
  *   The list of types available for this pasteboard item.
  **/
readonly types : Array<TypeIdentifier>


}

      } declare class Perspective {




  /**
  *   Returns all the built-in and custom perspectives.
  **/
 static readonly all : Array<Perspective.BuiltIn>|Perspective.Custom

}
declare namespace Perspective {
          class Custom {

  /**
  *   Returns an archived file wrapper for the custom perspective. The file wrapper's preferred filename will be the name of the perspective with an appropriate file extension applied. Its contents will include a plist representing the perspective's settings, along with any image attachments needed to display its icon.
  **/
fileWrapper() : FileWrapper

   /**
  *   Writes the perspective's `fileWrapper()` within a given parent directory URL, returning the URL of the saved FileWrapper. This function requires sandboxed access to the parent folder; it may be easier to work with the perspective's `fileWrapper()`, which can be accessed directly or saved to disk using `FileSaver`.
  **/
writeFileRepresentationIntoDirectory(parentURL: URL) : URL

  /**
  *   A custom perspective with the given name, if one exists. If there are multiple perspectives with the same name, it is not defined which will be returned.
  **/
 static byName(name: String) : Perspective.Custom|null

   /**
  *   Returns the custom perspective with the specified identifier, or `null` if no such perspective exists.
  **/
 static byIdentifier(identifier: String) : Perspective.Custom|null

  /**
  *   The unique identifier of the custom perspective.
  **/
readonly identifier : String

    /**
  *   The name of the custom perspective.
  **/
readonly name : String

  /**
  *   Returns all the custom perspectives.
  **/
 static readonly all : Array<Perspective.Custom>

}

      }declare namespace Perspective {
          class BuiltIn {



  /**
  *   The name of the built in perspective.
  **/
readonly name : String

  /**
  *   The flagged items.
  **/
 static readonly Flagged : Perspective.BuiltIn

    /**
  *   The upcoming due items.
  **/
 static readonly Forecast : Perspective.BuiltIn

    /**
  *   The inbox of tasks.
  **/
 static readonly Inbox : Perspective.BuiltIn

    /**
  *   Nearby items on a map (iOS only).
  **/
 static readonly Nearby : Perspective.BuiltIn

    /**
  *   The library of projects.
  **/
 static readonly Projects : Perspective.BuiltIn

    /**
  *   The projects needing review.
  **/
 static readonly Review : Perspective.BuiltIn

    /**
  *   A search of the database. This perspective cannot be set, but might be reported if the user is searching.
  **/
 static readonly Search : Perspective.BuiltIn

    /**
  *   The hierarchy of tags.
  **/
 static readonly Tags : Perspective.BuiltIn

    /**
  *   An array of all items of this enumeration.
  **/
 static readonly all : Array<Perspective.BuiltIn>

}

      } declare class PlugIn {

  /**
  *   Looks for a `PlugIn.Library` in the receiver and returns it if found.
  **/
library(identifier: String) : Object|null

   /**
  *
  **/
action(identifier: String) : PlugIn.Action|null

   /**
  *
  **/
handler(identifier: String) : PlugIn.Handler|null

   /**
  *
  **/
resourceNamed(name: String) : URL|null

   /**
  *
  **/
imageNamed(name: String) : Image|null

  /**
  *
  **/
 static find(identifier: String, minimumVersion: Version|null) : PlugIn|null

  /**
  *   Returns the original URL from whence this `PlugIn` came, if known.
  **/
readonly URL : URL|null

    /**
  *
  **/
readonly actions : Array<PlugIn.Action>

    /**
  *   Returns the author for the `PlugIn`.
  **/
readonly author : String

    /**
  *   Returns the description provided for the `PlugIn`.
  **/
readonly description : String

    /**
  *   Returns the localized, human-readable name for the `PlugIn`.
  **/
readonly displayName : String

    /**
  *
  **/
readonly handlers : Array<PlugIn.Handler>

    /**
  *   The unique identifier of the `PlugIn`.
  **/
readonly identifier : String

    /**
  *
  **/
readonly libraries : Array<PlugIn.Library>

    /**
  *   Returns the current `Version` for the `PlugIn`.
  **/
readonly version : Version

  /**
  *
  **/
 static readonly all : Array<PlugIn>

}
declare namespace PlugIn {
          class Action {
  constructor(perform: Function)


  /**
  *
  **/
readonly description : String

    /**
  *   Returns the default label to use for interface controls that invoke the action.
  **/
readonly label : String

    /**
  *   Returns the label to use for interface controls that invoke the action, when a long amount of space is available.
  **/
readonly longLabel : String

    /**
  *   Returns the label to use for interface controls that invoke the action, when a medium amount of space is available.
  **/
readonly mediumLabel : String

    /**
  *   Returns the name of the `PlugIn.Action`.
  **/
readonly name : String

    /**
  *   Returns the label to use for interface controls that show a prototype of the action control, such as on a macOS toolbar configuration sheet.
  **/
readonly paletteLabel : String

    /**
  *
  **/
readonly perform : Function

    /**
  *   Returns the `PlugIn` that contains this object.
  **/
readonly plugIn : PlugIn

    /**
  *   Returns the label to use for interface controls that invoke the action, when a short amount of space is available.
  **/
readonly shortLabel : String

    /**
  *   A function to check whether the action is supported, given the current application state, as determined by the arguments passed (typically including the selection). This optional Function may be configured while the `Action` is being loaded, but after that the `Action` will be frozen.
  **/
validate : Function|null


}

      }declare namespace PlugIn {
          class Handler {
  constructor(invoke: Function)


  /**
  *   The `Function` that will be executed for each handler registered for an event posted by an application object.
  **/
readonly invoke : Function

    /**
  *   Returns the name of the `PlugIn.Handler`.
  **/
readonly name : String

    /**
  *   Returns the `PlugIn` that contains this object.
  **/
readonly plugIn : PlugIn

    /**
  *   An optional `Function` that can be set on `PlugIn.Handler` as it is being loaded (but not after). This function is passed the application object that post events to trigger the handler. The return value should be a state object that is JSON archivable (or `undefined` if the handler has no state to maintain across invocations).
  **/
willAttach : Function|null

    /**
  *   An optional `Function` that can be set on `PlugIn.Handler` as it is being loaded (but not after). Called when a previously attached `PlugIn.Handler` is being detached from an application object. Any return value or thrown error are ignored.
  **/
willDetach : Function|null


}

      }declare namespace PlugIn {
          class Library {
  constructor(version: Version)


  /**
  *   Returns the name of the `PlugIn.Library`.
  **/
readonly name : String

    /**
  *   Returns the `PlugIn` that contains this object.
  **/
readonly plugIn : PlugIn

    /**
  *   Returns the `Version` of this library, as passed to the constructor.
  **/
readonly version : Version


}

      } declare class Preferences {
  constructor(identifier: String|null)
  /**
  *   Returns the previously stored value for the given key, or `null` if no value is stored.
  **/
read(key: String) : Object|null

   /**
  *   Returns the previously stored value as a `Boolean`, or `false` if there is no stored value or it can't be converted to a `Boolean`.
  **/
readBoolean(key: String) : Boolean

   /**
  *   Returns the previously stored value as a `String`, or `null` if there is no stored value or it is not a `String`.
  **/
readString(key: String) : String|null

   /**
  *   Returns the previously stored value as a `Number`, or `null` if there is no stored value or it is not a `Number`.
  **/
readNumber(key: String) : Number

   /**
  *   Returns the previously stored value as a `Date`, or `null` if there is no stored value or it is not a `Date`.
  **/
readDate(key: String) : Date|null

   /**
  *   Returns the previously stored value as a `Data`, or `null` if there is no stored value or it is not a `Data`.
  **/
readData(key: String) : Data|null

   /**
  *   Stores the specified key/value pair, or removes the pair if `value` is `null`.
  **/
write(key: String, value: Boolean|String|Number|Date|Data|null)

   /**
  *   Removes and previously stored value for the given key.
  **/
remove(key: String)


  /**
  *   The scoping identifier the instance given when created, or the plug-in identifier if none was given.
  **/
readonly identifier : String


}
 declare class Project {
  constructor(name: String, position: Folder|Folder.ChildInsertionLocation|null)
  /**
  *   Returns the first top-level `Task` in this project the given name, or `null`.
  **/
taskNamed(name: String) : Task|null

   /**
  *   Appends `stringToAppend` to the end of the `Project`'s root `Task`'s `note`.
  **/
appendStringToNote(stringToAppend: String)

   /**
  *   Adds `attachment` as an attachment to the `Project`'s root `Task`. If the attachment is large, consider using the `addLinkedFileURL` function instead. Including large attachments in the database can degrade app performance.
  **/
addAttachment(attachment: FileWrapper)

   /**
  *   Removes the attachment at `index` from this `Project`'s root `Task`'s `attachments` array.
  **/
removeAttachmentAtIndex(index: Number)

   /**
  *   If the project is not completed, marks it as complete with the given completion date (or the current date if no date is specified). For repeating project, this makes a clone of the project and marks that clone as completed. In either case, the project that has been marked completed is returned.
  **/
markComplete(date: Date|null) : Task

   /**
  *   If the project is completed, marks it as incomplete.
  **/
markIncomplete()

   /**
  *   Add a notification to the project from the specification in `info`. Supplying a `Date` creates an absolute notification that will fire at that date. Supplying a `Double` will create a due-relative notification. Specifying a due-relative notification when this project's `task`'s effectiveDueDate is not set will result in an error.
  **/
addNotification(info: Number|Date) : Task.Notification

   /**
  *   Remove an active notification for this project. Supplying a notification that is not in this task's `notifications` array, or a notification that has `task` to something other than this project's `task` results in an error.
  **/
removeNotification(notification: Task.Notification)

   /**
  *   Adds a `Tag` to this project, appending it to the end of the list of associated tags. If the tag is already present, no change is made. The `Database` function `moveTags` can be used to control the ordering of tags within the task.
  **/
addTag(tag: Tag)

   /**
  *   Adds multiple `Tag`s to this project, appending them to the end of the list of associated tags. For any tags already associated with the `Task`, no change is made. The `Database` function `moveTags` can be used to control the ordering of tags within the task.
  **/
addTags(tags: Array<Tag>)

   /**
  *   Removes a `Tag` from this project. If the tag is not associated with this project, no change is made.
  **/
removeTag(tag: Tag)

   /**
  *   Removes multiple `Tag`s from this project. If a tag is not associated with this project, no change is made.
  **/
removeTags(tags: Array<Tag>)

   /**
  *   Removes multiple `Tag`s from this project. If a tag is not associated with this project, no change is made.
  **/
clearTags()

   /**
  *   Links a file URL to this task. In order to be considered a file URL, `url` must have the `file` scheme. That is, `url` must be of the form `file://path-to-file`. The file at `url` will not be added to database, rather a bookmark leading to it will be added. In order to add files to a task, use the `addAttachment` function. Linking files is especially useful for large files, as including large files in the database can degrade app performance. This function throws an error if invoked on iOS.
  **/
addLinkedFileURL(url: URL)

   /**
  *   Removes the first link to a file with the given `url`. This removes the bookmark that leads to the file at `url`. If the file itself is present in the database, use the `removeAttachmentAtIndex` function instead.
  **/
removeLinkedFileWithURL(url: URL)

  /**
  *   Returns the `Project` with the specified identifier, or `null` if no such project exists.
  **/
 static byIdentifier(identifier: String) : Project|null

  /**
  *   Returns a location referring to the position just after this project within its containing `Folder` or `Database`.
  **/
readonly after : Folder.ChildInsertionLocation

    /**
  *   An array of `FileWrapper` objects representing the attachments associated with the `Project`'s root `Task`.
  **/
attachments : Array<FileWrapper>

    /**
  *   Returns a location referring to the position just before this project within its containing `Folder` or `Database`.
  **/
readonly before : Folder.ChildInsertionLocation

    /**
  *   Returns a location referring to the position after the last `Task` directly contained in the root `task` of this project.
  **/
readonly beginning : Task.ChildInsertionLocation

    /**
  *   An alias for `tasks`.
  **/
readonly children : TaskArray

    /**
  *   True if the project has been marked completed. Note that a project may be effectively considered completed if a containing project is marked completed.
  **/
readonly completed : Boolean

    /**
  *   If set, the project will be automatically marked completed when its last child Task is marked completed.
  **/
completedByChildren : Boolean

    /**
  *   If set, the project is completed.
  **/
completionDate : Date|null

    /**
  *   If set to `true`, the project contains single tasks, and has no next task.
  **/
containsSingletonActions : Boolean

    /**
  *   If set to `true`, this is the `Project` that inbox tasks that have enough information specified (as selected by the user's preferences) will be filed into upon a clean-up.
  **/
defaultSingletonActionHolder : Boolean

    /**
  *   If set, the project is not actionable until this date.
  **/
deferDate : Date|null

    /**
  *   If set, the project is dropped.
  **/
dropDate : Date|null

    /**
  *   If set, the project should be completed by this date.
  **/
dueDate : Date|null

    /**
  *   Returns the computed effective completion date for the `Project`, based on its local `completionDate` and those of its containers.
  **/
readonly effectiveCompletedDate : Date|null

    /**
  *   Returns the computed effective defer date for the `Project`, based on its local `deferDate` and those of its containers.
  **/
readonly effectiveDeferDate : Date|null

    /**
  *   Returns the computed effective drop date for the `Project`, based on its local `dropDate` and those of its containers.
  **/
readonly effectiveDropDate : Date|null

    /**
  *   Returns the computed effective due date for the `Project`, based on its local `dateDue` and those of its containers.
  **/
readonly effectiveDueDate : Date|null

    /**
  *   Returns the computed effective flagged status for the `Project`, based on its local `flagged` and those of its containers.
  **/
readonly effectiveFlagged : Boolean

    /**
  *   Returns a location referring to the position before the first `Task` directly contained in the root `task` of this project.
  **/
readonly ending : Task.ChildInsertionLocation

    /**
  *   The estimated number of minutes this `Project` will take to finish, or `null` if no estimate has been made.
  **/
estimatedMinutes : Number|null

    /**
  *   The flagged status of the project.
  **/
flagged : Boolean

    /**
  *   An alias for `flattenedTasks`.
  **/
readonly flattenedChildren : TaskArray

    /**
  *   Returns a flat array of all tasks contained within this `Project`'s root `Task`. Tasks are sorted by their order in the database.
  **/
readonly flattenedTasks : TaskArray

    /**
  *   Returns `true` if this `Project`'s root `Task` has children, more efficiently than checking if `children` is empty.
  **/
readonly hasChildren : Boolean

    /**
  *   The date on which the last review was performed. See also `nextReviewDate`.
  **/
lastReviewDate : Date|null

    /**
  *   The list of file URLs linked to this project's root task. The files at these URLs are not present in the database, rather the database holds bookmarks leading to these files. These links can be read on iOS, but not written to.
  **/
readonly linkedFileURLs : Array<URL>

    /**
  *   The name of the `Project`s root task.
  **/
name : String

    /**
  *   The scheduled date for the next review. See also `nextReviewDate`.
  **/
nextReviewDate : Date|null

    /**
  *   Returns the very next task that can be completed in the project, or `null` if there is none or the project contains singleton actions.
  **/
readonly nextTask : Task|null

    /**
  *   The `Project`'s root `Task`'s note.
  **/
note : String

    /**
  *   An array of the notifications that are active for this project.
  **/
readonly notifications : Array<Task.Notification>

    /**
  *   The `Folder` which contains this project.
  **/
readonly parentFolder : Folder|null

    /**
  *   The object holding the repetition properties for this project, or null if it is not repeating.
  **/
repetitionRule : Task.RepetitionRule|null

    /**
  *   The object holding the review repetition properties for this project. See also `lastReviewDate and `nextReviewDate`.
  **/
reviewInterval : Project.ReviewInterval

    /**
  *   If `true`, then children of this project form a dependency chain. For example, the first task blocks the second one until the first is completed.
  **/
sequential : Boolean

    /**
  *   When set, the `dueDate` and `deferDate` properties will use floating time zones. (Note: if a `Project` has no due or defer dates assigned, this property will revert to the database's default setting.)
  **/
shouldUseFloatingTimeZone : Boolean

    /**
  *   The current status of the project as a whole. This does not reflect the status of individual tasks within the project root task -- a project may be marked with the `Done` status and its individual tasks will be left with the completion state they had, in case the status is changed again to `Active`.
  **/
status : Project.Status

    /**
  *   Returns the `Tag`s associated with this `Project`.
  **/
readonly tags : TagArray

    /**
  *   Returns the root task of the project, which holds the bulk of the project information, as well as being the container for tasks within the project. If you wish to copy the project or move it to a location that requires tasks, you would use this task as the object to be copied or moved.
  **/
readonly task : Task

    /**
  *   Returns the current status of the project.
  **/
readonly taskStatus : Task.Status

    /**
  *   Returns all the tasks contained directly in this `Project`'s root `Task`, sorted by their library order.
  **/
readonly tasks : TaskArray


}
declare namespace Project {
          class ReviewInterval {



  /**
  *   The count of `units` to use for this interval (e.g. "14" days or "12" months).
  **/
steps : Number

    /**
  *   The units to use (e.g. "days", "weeks", "months", "years").
  **/
unit : String


}

      }declare namespace Project {
          class Status {




  /**
  *   The project is active.
  **/
 static readonly Active : Project.Status

    /**
  *   The project has been marked as completed.
  **/
 static readonly Done : Project.Status

    /**
  *   The project has been dropped.
  **/
 static readonly Dropped : Project.Status

    /**
  *   The project has been put on-hold.
  **/
 static readonly OnHold : Project.Status

    /**
  *   An array of all items of this enumeration.
  **/
 static readonly all : Array<Project.Status>

}

      } declare class ProjectArray {

  /**
  *   Returns the first `Project` contained directly in this array with the given name.
  **/
byName(name: String) : Project|null




}
 declare class SectionArray {

  /**
  *   Returns the first `Project` or `Folder` contained directly in this array with the given name.
  **/
byName(name: String) : Project|Folder|null




}
 declare class Selection {



  /**
  *   Returns all the objects in the selection.
  **/
readonly allObjects : Array<Object>

    /**
  *   Returns the `Database` object in the selection, if any.
  **/
readonly database : Database|null

    /**
  *   Returns all the `DatabaseObject` objects in the selection, if any.
  **/
readonly databaseObjects : Array<DatabaseObject>

    /**
  *   The `Document` containing the selection.
  **/
readonly document : DatabaseDocument|null

    /**
  *   Returns all the `Folder` objects in the selection, if any.
  **/
readonly folders : FolderArray

    /**
  *   Returns all the `Project` objects in the selection, if any.
  **/
readonly projects : ProjectArray

    /**
  *   Returns all the `Tag` objects in the selection, if any.
  **/
readonly tags : TagArray

    /**
  *   Returns all the `Task` objects in the selection, if any.
  **/
readonly tasks : TaskArray

    /**
  *   The `Window` containing the selection.
  **/
readonly window : DocumentWindow|null


}
 declare class Settings {

  /**
  *
  **/
defaultObjectForKey(key: String) : Object|null

   /**
  *
  **/
hasNonDefaultObjectForKey(key: String) : Boolean

   /**
  *
  **/
objectForKey(key: String) : Object|null

   /**
  *
  **/
setObjectForKey(value: Object|null, key: String)

   /**
  *
  **/
boolForKey(key: String) : Boolean

   /**
  *
  **/
setBoolForKey(value: Boolean, key: String)

   /**
  *
  **/
integerForKey(key: String) : Number

   /**
  *
  **/
setIntegerForKey(value: Number, key: String)


  /**
  *
  **/
readonly keys : Array<String>


}
 declare class SharePanel {
  constructor(items: Array<URL>|String|Image|FileWrapper)
  /**
  *   Appends the item to the end of `items`.
  **/
addItem(shareItem: URL|String|Image|FileWrapper)

   /**
  *   Appends the contents of the given array to the end of `items`.
  **/
addItems(shareItems: Array<URL>|String|Image|FileWrapper)

   /**
  *   Removes the first occurrence of the item from `items` if it is present in `items`.
  **/
removeItem(shareItem: URL|String|Image|FileWrapper)

   /**
  *   Removes the first occurrence of each member of the given array from `items` if that member is present in `items`.
  **/
removeItems(shareItems: Array<URL>|String|Image|FileWrapper)

   /**
  *   Sets `items` to an empty array. Note: Calling `show` when `items` is empty results in an error, so be sure to add new items after calling this and before calling `show`.
  **/
clearItems()

   /**
  *   Presents the share panel for its items. Calling this when `items` is empty will result in an error.
  **/
show()


  /**
  *   The items that will be supplied to the system share interaction upon calling `show`.
  **/
items : Array<URL>|String|Image|FileWrapper


}
 declare class SidebarTree {





}
 declare class Style {

  /**
  *   Sets (or clears) the value for the given style attribute.
  **/
set(attribute: Style.Attribute, value: Object|null) : Boolean

   /**
  *   Looks up the value for the specified style attribute locally, in the cascading and inherited styles, and finally falling back to the default value for the style attribute.
  **/
get(attribute: Style.Attribute) : Object|null

   /**
  *   Looks up the value for the specified style attribute locally, returning null if it is not set.
  **/
localValueForAttribute(attribute: Style.Attribute) : Object|null

   /**
  *   Adds the specified `NamedStyle` to the set of named styles to include in this `Style`. If the style is already present, or if this would create a loop (adding two `NamedStyles` to each other's list of named styles), an error will be thrown.
  **/
addNamedStyle(namedStyle: NamedStyle)

   /**
  *   Removes the specified `NamedStyle` from the set of named styles to include in this `Style`. If the style is not present, an error will be thrown.
  **/
removeNamedStyle(namedStyle: NamedStyle)

   /**
  *   Returns `true` if the receiver is influenced, directly or indirectly from the passed `Style`.
  **/
influencedBy(otherStyle: Style) : Boolean

   /**
  *   Updates all the attributes and inherited styles on the receiver to be the same as the argument `Style`.
  **/
setStyle(style: Style)

   /**
  *   Removes all the locally applied style attribute values for this `Style`.
  **/
clear()


  /**
  *   The color used to fill text. Setting the color to `null` will remove the setting for this style.
  **/
fontFillColor : Color

    /**
  *   Returns the `URL` link for a style, or `null` if there is no link applied. Note that `get(Style.Attribute.Link)` on the same style will return the default `URL` with an empty `toString()` value when there is no URL applied. If the style represents a file attachment and there is no specific link attribute set, the `URL` for the file attachment will be returned. If the style represents an file attachment that is embedded in the document, `null` will be returned.
  **/
readonly link : URL|null

    /**
  *   Returns an array of the `Style.Attribute`s defined on this `Style`.
  **/
readonly locallyDefinedAttributes : Array<Style.Attribute>

    /**
  *   Returns the `NamedStyle`s that are directly associated with this `Style`. If a style attribute lookup doesn't find a value in the local style, then the named styles will be searched.
  **/
readonly namedStyles : Array<NamedStyle>


}
declare namespace Style {
          class Attribute {



  /**
  *   Returns the default value that will be used when a style has no local value for this attribute, nor do any of its associated styles.
  **/
readonly defaultValue : Object

    /**
  *   Returns the string used to identify this attribute when calling `get` or `set` on a `Style` instance.
  **/
readonly key : String

  /**
  *
  **/
 static readonly BackgroundColor : Style.Attribute

    /**
  *
  **/
 static readonly BaselineOffset : Style.Attribute

    /**
  *
  **/
 static readonly BaselineSuperscript : Style.Attribute

    /**
  *
  **/
 static readonly Expansion : Style.Attribute

    /**
  *
  **/
 static readonly FontCondensed : Style.Attribute

    /**
  *
  **/
 static readonly FontFamily : Style.Attribute

    /**
  *
  **/
 static readonly FontFillColor : Style.Attribute

    /**
  *
  **/
 static readonly FontFixedPitch : Style.Attribute

    /**
  *
  **/
 static readonly FontItalic : Style.Attribute

    /**
  *
  **/
 static readonly FontName : Style.Attribute

    /**
  *
  **/
 static readonly FontNarrow : Style.Attribute

    /**
  *
  **/
 static readonly FontSize : Style.Attribute

    /**
  *
  **/
 static readonly FontStrokeColor : Style.Attribute

    /**
  *
  **/
 static readonly FontStrokeWidth : Style.Attribute

    /**
  *
  **/
 static readonly FontWeight : Style.Attribute

    /**
  *
  **/
 static readonly KerningAdjustment : Style.Attribute

    /**
  *
  **/
 static readonly LigatureSelection : Style.Attribute

    /**
  *
  **/
 static readonly Link : Style.Attribute

    /**
  *
  **/
 static readonly Obliqueness : Style.Attribute

    /**
  *
  **/
 static readonly ParagraphAlignment : Style.Attribute

    /**
  *
  **/
 static readonly ParagraphBaseWritingDirection : Style.Attribute

    /**
  *
  **/
 static readonly ParagraphDefaultTabInterval : Style.Attribute

    /**
  *
  **/
 static readonly ParagraphFirstLineHeadIndent : Style.Attribute

    /**
  *
  **/
 static readonly ParagraphHeadIndent : Style.Attribute

    /**
  *
  **/
 static readonly ParagraphLineHeightMultiple : Style.Attribute

    /**
  *
  **/
 static readonly ParagraphLineSpacing : Style.Attribute

    /**
  *
  **/
 static readonly ParagraphMaximumLineHeight : Style.Attribute

    /**
  *
  **/
 static readonly ParagraphMinimumLineHeight : Style.Attribute

    /**
  *
  **/
 static readonly ParagraphSpacing : Style.Attribute

    /**
  *
  **/
 static readonly ParagraphSpacingBefore : Style.Attribute

    /**
  *
  **/
 static readonly ParagraphTabStops : Style.Attribute

    /**
  *
  **/
 static readonly ParagraphTailIndent : Style.Attribute

    /**
  *
  **/
 static readonly ShadowBlurRadius : Style.Attribute

    /**
  *
  **/
 static readonly ShadowColor : Style.Attribute

    /**
  *
  **/
 static readonly ShadowOffset : Style.Attribute

    /**
  *
  **/
 static readonly StrikethroughAffinity : Style.Attribute

    /**
  *
  **/
 static readonly StrikethroughColor : Style.Attribute

    /**
  *
  **/
 static readonly StrikethroughPattern : Style.Attribute

    /**
  *
  **/
 static readonly StrikethroughStyle : Style.Attribute

    /**
  *
  **/
 static readonly UnderlineAffinity : Style.Attribute

    /**
  *
  **/
 static readonly UnderlineColor : Style.Attribute

    /**
  *
  **/
 static readonly UnderlinePattern : Style.Attribute

    /**
  *
  **/
 static readonly UnderlineStyle : Style.Attribute

}

      } declare class Tag {
  constructor(name: String, position: Tag|Tag.ChildInsertionLocation|null)
  /**
  *   Returns the first child `Tag` with the given name that is contained directly in this tag, or `null`.
  **/
tagNamed(name: String) : Tag|null

   /**
  *   An alias for `tagNamed`.
  **/
childNamed(name: String) : Tag|null

   /**
  *   Calls the given function for this `Tag` and recursively into any child tags.
  **/
apply(fn: Function) : ApplyResult|null

  /**
  *   Returns the `Tag` with the specified identifier, or `null` if no such tag exists.
  **/
 static byIdentifier(identifier: String) : Tag|null

  /**
  *   Returns a location referring to the position just after this tag.
  **/
readonly after : Tag.ChildInsertionLocation

    /**
  *   If set and the tag is active, tasks with this tag applied cannot be the next task of a project.
  **/
allowsNextAction : Boolean

    /**
  *   Returns a sorted list of the tasks associated with this tag that are currently available. Recent changes may not be reflected until a `cleanUp` is performed on the database.
  **/
readonly availableTasks : TaskArray

    /**
  *   Returns a location referring to the position just before this tag.
  **/
readonly before : Tag.ChildInsertionLocation

    /**
  *   Returns a location referring to the beginning of the contained tags in this tag.
  **/
readonly beginning : Tag.ChildInsertionLocation

    /**
  *   An alias for `tags`.
  **/
readonly children : TagArray

    /**
  *   Returns a location referring to the ending of the contained tags in this tag.
  **/
readonly ending : Tag.ChildInsertionLocation

    /**
  *   An alias for `flattenedTags`.
  **/
readonly flattenedChildren : TagArray

    /**
  *   Returns a flat array of all tags contained within this tag. Tags are sorted by their order in the database.
  **/
readonly flattenedTags : TagArray

    /**
  *
  **/
name : String

    /**
  *   The parent `Tag` which contains this tag.
  **/
readonly parent : Tag|null

    /**
  *   A convenience property that returns only `Project`s for the root tasks associated with this `Tag`.
  **/
readonly projects : ProjectArray

    /**
  *   Returns a sorted list of the tasks associated with this tag that remaing to be completed. Recent changes may not be reflected until a `cleanUp` is performed on the database.
  **/
readonly remainingTasks : TaskArray

    /**
  *   The current status of the tag as a whole, which is derived from `allowsNextAction` and `active`.
  **/
status : Tag.Status

    /**
  *   Returns a sorted list of the tags contained directly within this tag, sorted by their library order.
  **/
readonly tags : TagArray

    /**
  *   Returns a sorted list of the tasks associated with this tag.
  **/
readonly tasks : TaskArray

  /**
  *   The Forecast Tag, if it is set.
  **/
 static readonly forecastTag : Tag|null

}
declare namespace Tag {
          class ChildInsertionLocation {





}

      }declare namespace Tag {
          class Status {




  /**
  *   The tag is active.
  **/
 static readonly Active : Tag.Status

    /**
  *   The tag has been dropped.
  **/
 static readonly Dropped : Tag.Status

    /**
  *   The tag has been put on-hold.
  **/
 static readonly OnHold : Tag.Status

    /**
  *   An array of all items of this enumeration.
  **/
 static readonly all : Array<Tag.Status>

}

      } declare class TagArray {

  /**
  *   Returns the first `Tag` contained directly in this array with the given name.
  **/
byName(name: String) : Tag|null




}
 declare class Tags {

  /**
  *   Calls the given function for each `Tag` in the `Library` and recursively into any child tags.
  **/
apply(fn: Function) : ApplyResult|null


  /**
  *   Returns a location referring to the beginning of the top-level tags in the database.
  **/
readonly beginning : Tag.ChildInsertionLocation

    /**
  *   Returns a location referring to the ending of the top-level tags in the database.
  **/
readonly ending : Tag.ChildInsertionLocation


}
 declare class Task {
  constructor(name: String, position: Project|Task|Task.ChildInsertionLocation|null)
  /**
  *   Returns the first child `Task` with the given name that is contained directly in this task, or `null`.
  **/
taskNamed(name: String) : Task|null

   /**
  *   An alias for `taskNamed`.
  **/
childNamed(name: String) : Task|null

   /**
  *   Appends `stringToAppend` to the end of the `Task`'s `note`.
  **/
appendStringToNote(stringToAppend: String)

   /**
  *   Links a file URL to this task. In order to be considered a file URL, `url` must have the `file` scheme. That is, `url` must be of the form `file://path-to-file`. The file at `url` will not be added to database, rather a bookmark leading to it will be added. In order to add files to a task, use the `addAttachment` function. Linking files is especially useful for large files, as including large files in the database can degrade app performance.
  **/
addLinkedFileURL(url: URL)

   /**
  *   Removes the first link to a file with the given `url`. This removes the bookmark that leads to the file at `url`. If the file itself is present in the database, use the `removeAttachmentAtIndex` function instead.
  **/
removeLinkedFileWithURL(url: URL)

   /**
  *   Adds `attachment` as an attachment to the task. If the attachment is large, consider using the `addLinkedFileURL` function instead. Including large attachments in the database can degrade app performance.
  **/
addAttachment(attachment: FileWrapper)

   /**
  *   Removes the attachment at `index` from this task's `attachments` array.
  **/
removeAttachmentAtIndex(index: Number)

   /**
  *   Adds a `Tag` to this task, appending it to the end of the list of associated tags. If the tag is already present, no change is made. The `Database` function `moveTags` can be used to control the ordering of tags within the task.
  **/
addTag(tag: Tag)

   /**
  *   Adds multiple `Tag`s to this task, appending them to the end of the list of associated tags. For any tags already associated with the `Task`, no change is made. The `Database` function `moveTags` can be used to control the ordering of tags within the task.
  **/
addTags(tags: Array<Tag>)

   /**
  *   Removes a `Tag` from this task. If the tag is not associated with this task, no change is made.
  **/
removeTag(tag: Tag)

   /**
  *   Removes multiple `Tag`s from this task. If a tag is not associated with this task, no change is made.
  **/
removeTags(tags: Array<Tag>)

   /**
  *   Removes multiple `Tag`s from this task. If a tag is not associated with this task, no change is made.
  **/
clearTags()

   /**
  *   If the task is not completed, marks it as complete with the given completion date (or the current date if no date is specified). For repeating tasks, this makes a clone of the task and marks that clone as completed. In either case, the task that has been marked completed is returned.
  **/
markComplete(date: Date|null) : Task

   /**
  *   If the task is completed, marks it as incomplete.
  **/
markIncomplete()

   /**
  *   Drops this `Task`. If true is passed in for `allOccurrences` then this task will not repeat, even if it has a `repititionRule` set on it. If false is passed in for `allOccurrences`, this task will repeat as normal.
  **/
drop(allOccurrences: Boolean)

   /**
  *   Calls the given function for this `Task` and recursively into any child task.
  **/
apply(fn: Function) : ApplyResult|null

   /**
  *   Add a notification from the specification in `info`. Supplying a `Date` creates an absolute notification that will fire at that date. Supplying a `Double` will create a due-relative notification. Specifying a due relative notification when this task's effectiveDueDate is not set will result in an error.
  **/
addNotification(info: Number|Date) : Task.Notification

   /**
  *   Remove an active notification for this task. Supplying a notification that is not in this task's `notifications` array, or a notification that has `task` to something other than this task results in an error.
  **/
removeNotification(notification: Task.Notification)

  /**
  *   Returns an array of tasks by parsing the transport text formatted input. Optionally, only the first task can be requested (but will still be returned in an array).
  **/
 static byParsingTransportText(text: String, singleTask: Boolean|null) : Array<Task>

   /**
  *   Returns the `Task` with the specified identifier, or `null` if no such task exists.
  **/
 static byIdentifier(identifier: String) : Task|null

  /**
  *   The location after this task within its parent task's children. If this task has no parent task, then this is the position adjacent to it in its container.
  **/
readonly after : Task.ChildInsertionLocation

    /**
  *   For tasks in the inbox, the tentatively assigned project or parent task, which will be applied on cleanup.
  **/
assignedContainer : Project|Task|Inbox|null

    /**
  *   An array of `FileWrapper` objects representing the attachments associated with the task.
  **/
attachments : Array<FileWrapper>

    /**
  *   The location before this task within its parent task's children. If this task has no parent task, then this is the position adjacent to it in its container.
  **/
readonly before : Task.ChildInsertionLocation

    /**
  *   The location at the beginning of this task's children.
  **/
readonly beginning : Task.ChildInsertionLocation

    /**
  *   An alias for `tasks`.
  **/
readonly children : TaskArray

    /**
  *   True if the task has been marked completed. Note that a task may be effectively considered completed if a containing task is marked completed.
  **/
readonly completed : Boolean

    /**
  *   If set, the Task will be automatically marked completed when its last child Task is marked completed.
  **/
completedByChildren : Boolean

    /**
  *   If set, the Task is completed.
  **/
readonly completionDate : Date|null

    /**
  *   The `Project` that this `Task` is contained in, either as the root of the project or indirectly from a parent task. If this task is in the inbox, then this will be `null`.
  **/
readonly containingProject : Project|null

    /**
  *   If set, the Task is not actionable until this date.
  **/
deferDate : Date|null

    /**
  *   If set, the Task is dropped.
  **/
readonly dropDate : Date|null

    /**
  *   If set, the Task should be completed by this date.
  **/
dueDate : Date|null

    /**
  *   Returns the computed effective completion date for the `Task`, based on its local `completionDate` and those of its containers.
  **/
readonly effectiveCompletedDate : Date|null

    /**
  *   Returns the computed effective defer date for the `Task`, based on its local `deferDate` and those of its containers.
  **/
readonly effectiveDeferDate : Date|null

    /**
  *   Returns the computed effective drop date for the `Task`, based on its local `dropDate` and those of its containers.
  **/
readonly effectiveDropDate : Date|null

    /**
  *   Returns the computed effective due date for the `Task`, based on its local `dateDue` and those of its containers.
  **/
readonly effectiveDueDate : Date|null

    /**
  *   Returns the computed effective flagged status for the `Task`, based on its local `flagged` and those of its containers.
  **/
readonly effectiveFlagged : Boolean

    /**
  *   The location at the end of this task's children.
  **/
readonly ending : Task.ChildInsertionLocation

    /**
  *   The estimated number of minutes this task will take to finish, or `null` if no estimate has been made.
  **/
estimatedMinutes : Number|null

    /**
  *   The flagged status of the task.
  **/
flagged : Boolean

    /**
  *   An alias for `flattenedTasks`.
  **/
readonly flattenedChildren : TaskArray

    /**
  *   Returns a flat array of all tasks contained within this task. Tasks are sorted by their order in the database.
  **/
readonly flattenedTasks : TaskArray

    /**
  *   Returns `true` if this task has children, more efficiently than checking if `children` is empty.
  **/
readonly hasChildren : Boolean

    /**
  *   True if the task is a direct child of the inbox, but not if the task is contained by another task that is in the inbox.
  **/
readonly inInbox : Boolean

    /**
  *   The list of file URLs linked to this task. The files at these URLs are not present in the database, rather the database holds bookmarks leading to these files. These links can be read on iOS, but not written to.
  **/
readonly linkedFileURLs : Array<URL>

    /**
  *   The title of the task.
  **/
name : String

    /**
  *   The tasks's note.
  **/
note : String

    /**
  *   An array of the notifications that are active for this task.
  **/
readonly notifications : Array<Task.Notification>

    /**
  *   The parent `Task` which contains this task.
  **/
readonly parent : Task|null

    /**
  *   The `Project` that this `Task` is the root task of, or `null` if this task is in the inbox or contained by another task.
  **/
readonly project : Project|null

    /**
  *   The object holding the repetition properties for this task, or null if it is not repeating.
  **/
repetitionRule : Task.RepetitionRule|null

    /**
  *   If `true`, then children of this task form a dependency chain. For example, the first task blocks the second one until the first is completed.
  **/
sequential : Boolean

    /**
  *   When set, the `dueDate` and `deferDate` properties will use floating time zones. (Note: if a `Task` has no due or defer dates assigned, this property will revert to the database's default setting.)
  **/
shouldUseFloatingTimeZone : Boolean

    /**
  *   Returns the `Tag`s associated with this `Task`.
  **/
readonly tags : TagArray

    /**
  *   Returns the current status of the task.
  **/
readonly taskStatus : Task.Status

    /**
  *   Returns all the tasks contained directly in this task, sorted by their library order.
  **/
readonly tasks : TaskArray


}
declare namespace Task {
          class Notification {



  /**
  *   The absolute date at which this notification will fire, if its `kind` is `absolute`. Getting or setting this property throws an error if this notification's `kind` is not `absolute`.
  **/
absoluteFireDate : Date

    /**
  *   The time at which this notification will fire. For due or defer-relative notifications, this date will change with its `task` object's due and defer dates.
  **/
readonly initialFireDate : Date

    /**
  *   Whether or not this notification has been snoozed.
  **/
readonly isSnoozed : Boolean

    /**
  *   This notification's kind. A `kind` of `unknown` indicates that the notification is in an invalid state.
  **/
readonly kind : Task.Notification.Kind

    /**
  *   The next time at which this notification will fire. This will only have a value if the `initialFireDate` is not yet reached, or this notification's `repeatInterval` is greater than 0.
  **/
readonly nextFireDate : Date|null

    /**
  *   The relative offset in minutes at which this notification will fire from the specified date on its `task`. Getting or setting this property throws an error if this notification's `kind` is not either `dueRelative` or `deferRelative`.
  **/
relativeFireOffset : Number

    /**
  *   How often in seconds this notification will fire once its `initialFireDate` is reached. Setting this to 0 or any negative number will cease repetition of this notification.
  **/
repeatInterval : Number

    /**
  *   The `Task` object this notification will fire for.
  **/
readonly task : Task|null

    /**
  *   Whether or not the notification's fire date uses floating time zones. This can only return true if the notification's `kind` is absolute`. This can be changed by setting `shouldUseFloatingTimeZone` on this notification's `task`
  **/
readonly usesFloatingTimeZone : Boolean


}
 namespace Notification {
          class Kind {




  /**
  *   This notification fires on a given date, regardless of its task's due and defer dates.
  **/
 static readonly Absolute : Task.Notification.Kind

    /**
  *   This notification fires at a time relative to its task's due date.
  **/
 static readonly DueRelative : Task.Notification.Kind

    /**
  *   It is not known what this notification's fire date is relative to.
  **/
 static readonly Unknown : Task.Notification.Kind

    /**
  *   An array of all items of this enumeration.
  **/
 static readonly all : Array<Task.Notification.Kind>

}

      }
      }declare namespace Task {
          class ChildInsertionLocation {





}

      }declare namespace Task {
          class RepetitionMethod {




  /**
  *
  **/
 static readonly DeferUntilDate : Task.RepetitionMethod

    /**
  *
  **/
 static readonly DueDate : Task.RepetitionMethod

    /**
  *
  **/
 static readonly Fixed : Task.RepetitionMethod

    /**
  *   The task does not repeat.
  **/
 static readonly None : Task.RepetitionMethod

    /**
  *   An array of all items of this enumeration.
  **/
 static readonly all : Array<Task.RepetitionMethod>

}

      }declare namespace Task {
          class RepetitionRule {
  constructor(ruleString: String, method: Task.RepetitionMethod)
  /**
  *   Returns the first date described by the repetition rule that is after the given date.
  **/
firstDateAfterDate(date: Date) : Date


  /**
  *   The method used to create the repetition rule.
  **/
readonly method : Task.RepetitionMethod

    /**
  *   The ICS rule string used to create the repetition rule.
  **/
readonly ruleString : String


}

      }declare namespace Task {
          class Status {




  /**
  *   The task is available to work on.
  **/
 static readonly Available : Task.Status

    /**
  *   The task is not available to work on currently, due to a future defer date, a preceeding task in a sequential project, or having an on-hold tag associated.
  **/
 static readonly Blocked : Task.Status

    /**
  *   The task is already completed.
  **/
 static readonly Completed : Task.Status

    /**
  *   The task will not be worked on.
  **/
 static readonly Dropped : Task.Status

    /**
  *   The task is incomplete and due soon.
  **/
 static readonly DueSoon : Task.Status

    /**
  *   The task is the first available task in a project.
  **/
 static readonly Next : Task.Status

    /**
  *   The task is incomplete overdue.
  **/
 static readonly Overdue : Task.Status

    /**
  *   An array of all items of this enumeration.
  **/
 static readonly all : Array<Task.Status>

}

      } declare class TaskArray extends Array<Task> {

  /**
  *   Returns the first `Task` contained directly in this array with the given name.
  **/
byName(name: String) : Task|null




}
 declare class Text {
  constructor(string: String, style: Style)
  /**
  *   Returns a copy of the text in the specified range.
  **/
textInRange(range: Text.Range) : Text

   /**
  *   Returns a `Style` instance for the given range of the `Text`.
  **/
styleForRange(range: Text.Range) : Style

   /**
  *   Returns an array of `TextRange`s for the specified component. If `useEnclosingRange` is `true`, than any extra characters that separate follow a component will be included in its range. Any extra characters before the first found component will be included in the first range.
  **/
ranges(component: TextComponent, useEnclosingRange: Boolean|null) : Array<Text.Range>

   /**
  *   Replaces the sub-range of the receiving `Text` with a copy of the passed in `Text` (which remains unchanged).
  **/
replace(range: Text.Range, wth: Text)

   /**
  *   Appends the given `Text` to the receiver.
  **/
append(text: Text)

   /**
  *   Inserts a copy of the given `Text` at the specified position in the receiver.
  **/
insert(position: Text.Position, text: Text)

   /**
  *   Removes the indicated sub-range of the receiving `Text`.
  **/
remove(range: Text.Range)

   /**
  *   Finds an occurrence of `string` within the `Text` and returns the enclosing `Text.Range` if there is a match. If `range` is passed, only that portion of the `Text` is searched. The supplied `options`, if any, change how the search is performed based on their definition.
  **/
find(string: String, options: Array<Text.FindOption>|null, range: Text.Range|null) : Text.Range|null

  /**
  *   Returns a new `Text` instance that represents a file attachment. The attachment has a single character string content with a special value.
  **/
 static makeFileAttachment(fileWrapper: FileWrapper, style: Style) : Text

  /**
  *   Returns an array of copies of the blocks of `Text` in the receiver that represent `Attachment`s. Note that editing these instances will not change the original.
  **/
readonly attachments : Array<Text>

    /**
  *   Returns an array of copies of the contiguous blocks of `Text` in the receiver that have the same style. Note that editing these instances will not change the original.
  **/
readonly attributeRuns : Array<Text>

    /**
  *   Returns an array of copies of the characters in the `Text`. Note that editing these instances will not change the original.
  **/
readonly characters : Array<Text>

    /**
  *   Returns a `Text.Position` indicating the end of the `Text`.
  **/
readonly end : Text.Position

    /**
  *   Returns the attached file wrapper for the `Text` (or rather, the first character of the text), if any.
  **/
readonly fileWrapper : FileWrapper|null

    /**
  *   Returns an array of copies of the paragraphs in the `Text`. Note that editing these instances will not change the original. Paragraphs, if ended by a newline, will contain the newline character.
  **/
readonly paragraphs : Array<Text>

    /**
  *   Returns a `Text.Range` that spans the entire `Text`.
  **/
readonly range : Text.Range

    /**
  *   Returns an array of copies of the sentences in the `Text`. Note that editing these instances will not change the original.
  **/
readonly sentences : Array<Text>

    /**
  *   Returns a `Text.Position` indicating the beginning of the `Text`.
  **/
readonly start : Text.Position

    /**
  *   Returns a plain `String` version of the characters in the `Text`. Note that since JavaScript represents Strings as Unicode code points, the length of the returned string may be differnt from the number of `characters` in the `Text` object.
  **/
string : String

    /**
  *   Returns a `Style` instance for this `Text` object.
  **/
readonly style : Style

    /**
  *   Returns an array of copies of the words in the `Text`. Note that editing these instances will not change the original.
  **/
readonly words : Array<Text>


}
declare namespace Text {
          class FindOption {




  /**
  *   Matches must be anchored to the beginning (or end if Backwards is include) of the string or search range.
  **/
 static readonly Anchored : Text.FindOption

    /**
  *   Search starting from the end of the string or range.
  **/
 static readonly Backwards : Text.FindOption

    /**
  *   Compare upper and lower case characters as equal.
  **/
 static readonly CaseInsensitive : Text.FindOption

    /**
  *   Ignore diacritics. For example, "ö" is considered the same as "o".
  **/
 static readonly DiacriticInsensitive : Text.FindOption

    /**
  *   Force an ordering between strings that aren't strictly equal.
  **/
 static readonly ForcedOrdering : Text.FindOption

    /**
  *   Perform exact character-by-character matching.
  **/
 static readonly Literal : Text.FindOption

    /**
  *   Order numbers by numeric value, not lexigraphically. Only applies to ordered comparisons, not find operations.
  **/
 static readonly Numeric : Text.FindOption

    /**
  *   For find operations, the string is treated as an ICU-compatible regular expression. If set, no other options can be used except for `CaseInsensitive` and `Anchored`.
  **/
 static readonly RegularExpression : Text.FindOption

    /**
  *   Ignore width differences. For example, "a" is considered the same as 'FULLWIDTH LATIN SMALL LETTER A' (U+FF41).
  **/
 static readonly WidthInsensitive : Text.FindOption

    /**
  *   An array of all items of this enumeration.
  **/
 static readonly all : Array<Text.FindOption>

}

      }declare namespace Text {
          class Position {





}

      }declare namespace Text {
          class Range {
  constructor(start: Text.Position, end: Text.Position)


  /**
  *   Returns the `Text.Position` for the end of the `Text.Range`
  **/
readonly end : Text.Position

    /**
  *   Returns `true` if the `Text.Range` contains no characters.
  **/
readonly isEmpty : Boolean

    /**
  *   Returns the `Text.Position` for the beginning of the `Text.Range`
  **/
readonly start : Text.Position


}

      } declare class TextAlignment {




  /**
  *   Visually center aligned.
  **/
 static readonly Center : TextAlignment

    /**
  *   Fully-justified.
  **/
 static readonly Justified : TextAlignment

    /**
  *   Visually left aligned.
  **/
 static readonly Left : TextAlignment

    /**
  *   Use the default alignment based on the characters in the text.
  **/
 static readonly Natural : TextAlignment

    /**
  *   Visually right aligned.
  **/
 static readonly Right : TextAlignment

    /**
  *   An array of all items of this enumeration.
  **/
 static readonly all : Array<TextAlignment>

}
 declare class TextComponent {




  /**
  *   The ranges of Text which represent Attachments.
  **/
 static readonly Attachments : TextComponent

    /**
  *   The ranges of Text which have the same attributes.
  **/
 static readonly AttributeRuns : TextComponent

    /**
  *   The individual characters of the Text. Note that some characters (like emoji) consist of multiple Unicode code points.
  **/
 static readonly Characters : TextComponent

    /**
  *   The paragraphs of Text. Unlike other options, the line breaking characters that end the paragraph are included.
  **/
 static readonly Paragraphs : TextComponent

    /**
  *   The sentences of the Text.
  **/
 static readonly Sentences : TextComponent

    /**
  *   The words in the Text. Whitespace or other word break characters are not included.
  **/
 static readonly Words : TextComponent

    /**
  *   An array of all items of this enumeration.
  **/
 static readonly all : Array<TextComponent>

}
 declare class TimeZone {
  constructor(abbreviation: String)


  /**
  *   The abbreviation for the `TimeZone`.
  **/
readonly abbreviation : String|null

    /**
  *   Returns `true` if the `TimeZone` is currently using daylight savings time.
  **/
readonly daylightSavingTime : Boolean

    /**
  *   The current difference in seconds between this `TimeZone` and GMT.
  **/
readonly secondsFromGMT : Number

  /**
  *   The list of known time zone abbreviations.
  **/
 static readonly abbreviations : Array<String>

}
 declare class Timer {

  /**
  *
  **/
cancel()

  /**
  *   Makes a new `Timer` that will fire once, after the specified interval (in seconds from the current time). When the `Timer` fires, the passed in `Function` is called, passing the `Timer` as its argument.
  **/
 static once(interval: Number, action: Function) : Timer

   /**
  *   Makes a new `Timer` that will fire repeatedly with the specified interval (in seconds, with the first invocation happening that interval after the current time). When the `Timer` fires, the passed in `Function` is called, passing the `Timer` as its argument.
  **/
 static repeating(interval: Number, action: Function) : Timer

  /**
  *
  **/
readonly interval : Number


}
 declare class ToolbarItem {



  /**
  *
  **/
image : Image|null

    /**
  *
  **/
label : String

    /**
  *
  **/
toolTip : String|null


}
 declare class Tree {

  /**
  *   Returns the `TreeNode` that represents the `object` in this `Tree`, or `null` if it cannot be found (possibly filtered out).
  **/
nodeForObject(object: Object) : TreeNode|null

   /**
  *   Returns an array of `TreeNode`s for the objects that are currently in the `Tree`, according to the same filters as `nodeForObject()`. The size of the resulting node array may be smaller (even empty) than the passed in `objects` array.
  **/
nodesForObjects(object: Array<Object>) : Array<TreeNode>

   /**
  *   Ensures the ancestor nodes of all the specified nodes are expanded.
  **/
reveal(nodes: Array<TreeNode>)

   /**
  *   Selects the specified `TreeNode`s that are visible (nodes with collapsed ancestors cannot be selected). If `extending` is `true`, the existing selection is not cleared.
  **/
select(nodes: Array<TreeNode>, extending: Boolean|null)

   /**
  *   Writes a serialized version of the `nodes` to the specified pasteboard.
  **/
copyNodes(nodes: Array<TreeNode>, to: Pasteboard)

   /**
  *   Attempts to read a serialized version of nodes from the pasteboard and create new items at the specified location in the receiver. If a parent node is not specified, then the root node of the receiver is assumed. If a `childIndex` is not specified, any new children are placed at the end of the parent's existing children.
  **/
paste(from: Pasteboard, parentNode: TreeNode|null, childIndex: Number|null)


  /**
  *   Returns the `rootNode` of the `Editor`.
  **/
readonly rootNode : TreeNode

    /**
  *   Returns the list of selected `TreeNode`s, in the order they appear in the tree.
  **/
readonly selectedNodes : Array<TreeNode>


}
 declare class TreeNode {

  /**
  *   Attempts to expand the `TreeNode`. If `completely` is passed, all the child nodes will be expanded as they allow.
  **/
expand(completely: Boolean|null)

   /**
  *   Attempts to collapse the `TreeNode`. If `completely` is passed, all the child nodes will be collapse as they allow.
  **/
collapse(completely: Boolean|null)

   /**
  *   Attempts to expand the inline note of the `TreeNode`. If `completely` is passed, all the child node notes will be expanded.
  **/
expandNote(completely: Boolean|null)

   /**
  *   Attempts to collapse the inline note of the `TreeNode`. If `completely` is passed, all the child node notes will be collapsed.
  **/
collapseNote(completely: Boolean|null)

   /**
  *   Expands all the
  **/
reveal()

   /**
  *   Calls the supplied function for each `TreeNode` in the receiver (including the receiver), passing that node as the single argument.
  **/
apply(fn: Function)


  /**
  *   Returns `true` if this `TreeNode` can be collapsed.
  **/
readonly canCollapse : Boolean

    /**
  *   Returns `true` if this `TreeNode` can be expanded.
  **/
readonly canExpand : Boolean

    /**
  *   Returns the array of children that are visible under this node, according to any filtering that is being done, and in the order specified by any sorting rules that have been established.
  **/
readonly children : Array<TreeNode>

    /**
  *   Returns the index of this `TreeNode` among its siblings, or zero for the `rootNode`.
  **/
readonly index : Number

    /**
  *   Returns `true` if this `TreeNode` is currently expanded.
  **/
readonly isExpanded : Boolean

    /**
  *   Returns `true` if the note of this `TreeNode` is currently expanded.
  **/
readonly isNoteExpanded : Boolean

    /**
  *   Returns `true` if the `TreeNode` is the `rootNode` or all of its ancestor nodes are expanded.
  **/
readonly isRevealed : Boolean

    /**
  *   Returns `true` if this node is the `rootNode` of its tree.
  **/
readonly isRootNode : Boolean

    /**
  *   Returns `true` if this `TreeNode` can be selected. The `rootNode` cannot be selected, nor can nodes that aren't revealed.
  **/
readonly isSelectable : Boolean

    /**
  *   Set to `true` if this `TreeNode` is in the list of selected nodes for its tree. Attempting to set this to `true` will do nothing if the node is not revealed (or is the root node).
  **/
isSelected : Boolean

    /**
  *   Returns the nesting level of the `TreeNode`, relative to the root of the tree. The `rootNode` of an `Outline` has level zero, its children have level one, and so on. Note that if only a portion of the model is being shown, this level may not match the level of the underlying `object`.
  **/
readonly level : Number

    /**
  *   The model object which this node wraps.
  **/
readonly object : Object

    /**
  *   Returns the `TreeNode` that contains this node, or `null` if this is the `rootNode`.
  **/
readonly parent : TreeNode|null

    /**
  *   Returns the root `TreeNode` for the tree that this node belongs to.
  **/
readonly rootNode : TreeNode


}
 declare class TypeIdentifier {
  constructor(identifier: String)
  /**
  *   Returns `true` if the instance is the same as the given argument or a more specific type. For example, `TypeIdentifier.png.conformsTo(TypeIdentifier.image)` will be `true`, but `TypeIdentifier.png.conformsTo(TypeIdentifier.plainText)` will be `false`.
  **/
conformsTo(other: TypeIdentifier) : Boolean


  /**
  *   Returns a human-readable description of the type.
  **/
readonly displayName : String

    /**
  *   Returns a unique string for a type identifier, suitable for archiving or encoding in scripts.
  **/
readonly identifier : String

    /**
  *   The list of filesystem path extensions used by this type.
  **/
readonly pathExtensions : Array<String>

  /**
  *   The URL type.
  **/
 static readonly URL : TypeIdentifier

    /**
  *   The binary property list type.
  **/
 static readonly binaryPropertyList : TypeIdentifier

    /**
  *   The comma-separated text type.
  **/
 static readonly csv : TypeIdentifier

    /**
  *   The list of `TypeIdentifier`s that can be read and written natively by documents in this application.
  **/
 static readonly editableTypes : Array<TypeIdentifier>

    /**
  *   The GIF image type.
  **/
 static readonly gif : TypeIdentifier

    /**
  *   A generic type that all image types conform to.
  **/
 static readonly image : TypeIdentifier

    /**
  *   The JPEG image type.
  **/
 static readonly jpeg : TypeIdentifier

    /**
  *   The JSON type.
  **/
 static readonly json : TypeIdentifier

    /**
  *   The OmniFocus document file type.
  **/
 static readonly ofocus : TypeIdentifier

    /**
  *   The PDF type.
  **/
 static readonly pdf : TypeIdentifier

    /**
  *   The plain text type.
  **/
 static readonly plainText : TypeIdentifier

    /**
  *   The PNG image type.
  **/
 static readonly png : TypeIdentifier

    /**
  *   The generic property list type.
  **/
 static readonly propertyList : TypeIdentifier

    /**
  *   The list of `TypeIdentifier`s that can be read by documents in this this application.
  **/
 static readonly readableTypes : Array<TypeIdentifier>

    /**
  *   The RTF type.
  **/
 static readonly rtf : TypeIdentifier

    /**
  *   The RTFD type.
  **/
 static readonly rtfd : TypeIdentifier

    /**
  *   The TaskPaper-formatted tasks pasteboard type.
  **/
 static readonly taskPaper : TypeIdentifier

    /**
  *   The pasteboard type identifier for OmniFocus tasks and projects.
  **/
 static readonly tasks : TypeIdentifier

    /**
  *   The pasteboard type identifier for OmniFocus tasks, projects, and folders.
  **/
 static readonly tasksAndFolders : TypeIdentifier

    /**
  *   The TIFF image type.
  **/
 static readonly tiff : TypeIdentifier

    /**
  *   The list of `TypeIdentifier`s that can be written by documents in this application (though some documents may be exportable only in a subset of these types).
  **/
 static readonly writableTypes : Array<TypeIdentifier>

    /**
  *   The XML property list type.
  **/
 static readonly xmlPropertyList : TypeIdentifier

}
 declare class URL {

  /**
  *   Get the contents at the destination of this URL.
  **/
fetch(success: Function, failure: Function|null)

   /**
  *   Invoke an [x-callback-url API](http://x-callback-url.com) end-point, with the callback functions being invoked when a reply is received. When a reply is received, the parameters of that URL are decoded as JSON, or left as String values if not valid JSON, and stored as properties of a result object. For a successful reply, if the result object has one property, its value is passed as the first argument to the success function. If there are zero or more than one parameters, the full object is passed as the first argument. In both cases, the success function is passed a second argument that is the full object of parameters. The failure callback is always passed the object will all the result parameters, typically `errorCode` and `errorMessage`.
  **/
call(success: Function, failure: Function|null)

   /**
  *   Ask the system to open this URL.
  **/
open()

   /**
  *   Scan a directory `URL` for files of the given types. If `recurse` is specified and is false, only the immediate contents of the directory will be considered. If `recurse` is not specified or is `true`, the full directory tree will be scanned.
  **/
find(types: Array<TypeIdentifier>, recurse: Boolean|null) : Promise<Array<URL>>

   /**
  *
  **/
toString() : String

   /**
  *
  **/
appendingPathComponent(component: String) : URL

   /**
  *
  **/
deletingLastPathComponent() : URL

  /**
  *   Deprecated: Please use `FilePicker` instead.
  **/
 static choose(types: Array<String>) : URL|null

   /**
  *   Deprecated: Please use `FilePicker` instead.
  **/
 static chooseFolder() : URL|null

   /**
  *   Parses the string as a `URL` if possible and returns a new instance, or `null` otherwise.
  **/
 static fromString(string: String) : URL|null

   /**
  *   Creates a `URL` to invoke the given JS on the given app (url scheme) appropriate for use with the call function.
  **/
 static tellScript(app: String, js: String, arg: Object|null) : URL|null

   /**
  *   Creates a `URL` to invoke the given JS function on the given app (url scheme) appropriate for use with the call function.
  **/
 static tellFunction(app: String, jsFunction: Function, arg: Object|null) : URL|null

  /**
  *   String representation of this URL.
  **/
readonly string : String

    /**
  *
  **/
readonly toObject : Object|null

  /**
  *   Returns the URL scheme for the current app.
  **/
 static readonly currentAppScheme : String

}
declare namespace URL {
          class FetchRequest {
  constructor()
  /**
  *   Perform the request, returning a `Promise`. On success, the promise will resolve to a `URL.FetchResponse`.
  **/
fetch() : Promise<URL.FetchResponse>

  /**
  *   Parses the string as a `URL` if possible and returns a new instance, or `null` otherwise.
  **/
 static fromString(string: String) : URL.FetchRequest|null

  /**
  *   The body of the request, typically used in an HTTP `POST` or `PUT` request. This API is suitable for uploading binary data, or for text which needs to be encoded in a form other than UTF-8. If UTF-8 text is suitable, `bodyString` is likely to be a better choice.
  **/
bodyData : Data|null

    /**
  *   The body of the request, typically used in an HTTP `POST` or `PUT` request. The provided string will be transmitted using the UTF-8 encoding.
  **/
bodyString : String|null

    /**
  *   The cache policy for the request: `default`, `no-store`, `reload`, `no-cache`, `force-cache`, or `only-if-cached`.
  **/
cache : String|null

    /**
  *   Custom HTTP headers to be sent with this request.
  **/
headers : Object

    /**
  *   The HTTP request method of the request: `GET`, `POST`, `PUT`, `DELETE`, etc.
  **/
method : String|null

    /**
  *   The URL for this fetch request. Much of the additional functionality provided by the fetch request API will only work with `http` and `https` URLs. (For example, the `method` and `cache` and `headers` don't have any effect in the context of a `file` or `omnifocus` URL.)
  **/
url : URL|null


}

      }declare namespace URL {
          class FetchResponse {



  /**
  *   Returns the raw HTTP body data from this response.
  **/
readonly bodyData : Data|null

    /**
  *   This is a convenience wrapper which interprets the `bodyData` of this response as UTF-8 text. (Note: the current implementation assumes the text is encoded using UTF-8, but ideally it would honor the text encoding as reported by `textEncodingName`.)
  **/
readonly bodyString : String|null

    /**
  *   Returns the HTTP header fields for this response.
  **/
readonly headers : Object

    /**
  *   Returns the HTTP MIME type for this response (e.g. `text/plain`, `application/json`, etc.).
  **/
readonly mimeType : String|null

    /**
  *   Returns the HTTP status code for this response (e.g. `200`, `404`, etc.).
  **/
readonly statusCode : Number

    /**
  *   Returns the reported text encoding for this response. This name will be the actual string reported by the origin source, or `null` if no encoding was specified.
  **/
readonly textEncodingName : String|null

    /**
  *   Returns the URL for this response.
  **/
readonly url : URL|null


}

      } declare class UnderlineAffinity {




  /**
  *   Underline only the words, but not the space between them.
  **/
 static readonly ByWord : UnderlineAffinity

    /**
  *   Underline the entire range.
  **/
 static readonly None : UnderlineAffinity

    /**
  *   An array of all items of this enumeration.
  **/
 static readonly all : Array<UnderlineAffinity>

}
 declare class UnderlinePattern {




  /**
  *   Dashed line.
  **/
 static readonly Dash : UnderlinePattern

    /**
  *   Alternating dashes and dots.
  **/
 static readonly DashDot : UnderlinePattern

    /**
  *   Alternating dashes and pairs of dots.
  **/
 static readonly DashDotDot : UnderlinePattern

    /**
  *   Dotted line.
  **/
 static readonly Dot : UnderlinePattern

    /**
  *   A continuous line.
  **/
 static readonly Solid : UnderlinePattern

    /**
  *   An array of all items of this enumeration.
  **/
 static readonly all : Array<UnderlinePattern>

}
 declare class UnderlineStyle {




  /**
  *   Two lines.
  **/
 static readonly Double : UnderlineStyle

    /**
  *   No underline.
  **/
 static readonly None : UnderlineStyle

    /**
  *   A single line.
  **/
 static readonly Single : UnderlineStyle

    /**
  *   A single thick line.
  **/
 static readonly Thick : UnderlineStyle

    /**
  *   An array of all items of this enumeration.
  **/
 static readonly all : Array<UnderlineStyle>

}
 declare class Version {
  constructor(versionString: String)
  /**
  *   Returns true if the receiving `Version` is equal to the argument `Version`.
  **/
equals(version: Version) : Boolean

   /**
  *   Returns true if the receiving `Version` is at the same as or newer than the argument `Version`.
  **/
atLeast(version: Version) : Boolean

   /**
  *   Returns true if the receiving `Version` is strictly after the argument `Version`.
  **/
isAfter(version: Version) : Boolean

   /**
  *   Returns true if the receiving `Version` is strictly before the argument `Version`.
  **/
isBefore(version: Version) : Boolean


  /**
  *   Returns as an opaque string representation of the `Version`, suitable for display or logging. This should never be used in comparisons of any sort.
  **/
readonly versionString : String


}
 declare class Window {

  /**
  *
  **/
close()




}

 declare module globalThis {
  /**
  *   Returns the first top-level `Tag` with the given name, or `null`.
  **/
let tagNamed: (name: String) => Tag|null

   /**
  *   Returns the first top-level `Folder` with the given name, or `null`.
  **/
let folderNamed: (name: String) => Folder|null

   /**
  *   Returns the first top-level `Project` with the given name, or `null`.
  **/
let projectNamed: (name: String) => Project|null

   /**
  *   Returns each existing `Project` that Smart Matches the given `search`. The result will be in the same order and have the same projects as would be found when searching this string in the Quick Open window.
  **/
let projectsMatching: (search: String) => Array<Project>

   /**
  *   Returns each existing `Folder` that Smart Matches the given `search`. The result will be in the same order and have the same folders as would be found when searching this string in the Quick Open window.
  **/
let foldersMatching: (search: String) => Array<Folder>

   /**
  *   Returns each existing `Tag` that Smart Matches the `search`. The result will be in the same order and have the same tags as would be found when searching this string in the Quick Open window.
  **/
let tagsMatching: (search: String) => Array<Tag>

   /**
  *   Returns the first top-level `Task` in the inbox with the given name, or `null`.
  **/
let taskNamed: (name: String) => Task|null

   /**
  *   Saves any unsaved changes to disk. If sync is enabled and there were unsaved changes, this also triggers a sync request.
  **/
let save: ()
 => void
   /**
  *   Moves tasks to a different location.
  **/
let moveTasks: (tasks: Array<Task>, position: Project|Task|Task.ChildInsertionLocation)
 => void
   /**
  *   Makes copies of the tasks and returns the new copies. The order of the inputs is not considered and the copies are returned in library order of the originals.
  **/
let duplicateTasks: (tasks: Array<Task>, position: Project|Task|Task.ChildInsertionLocation) => TaskArray

   /**
  *   Converts tasks to new projects at the specified location.
  **/
let convertTasksToProjects: (tasks: Array<Task>, position: Folder|Folder.ChildInsertionLocation) => Array<Project>

   /**
  *   Moves sections to a different location.
  **/
let moveSections: (sections: Array<Project>|Folder, position: Folder|Folder.ChildInsertionLocation)
 => void
   /**
  *   Makes copies of the sections and returns the new copies. The order of the inputs is not considered and the copies are returned in library order of the originals.
  **/
let duplicateSections: (sections: Array<Project>|Folder, position: Folder|Folder.ChildInsertionLocation) => SectionArray

   /**
  *   Moves tags to a different location.
  **/
let moveTags: (tags: Array<Tag>, position: Tag|Tag.ChildInsertionLocation)
 => void
   /**
  *   Makes copies of the tags and returns the new copies. The order of the inputs is not considered and the copies are returned in library order of the originals.
  **/
let duplicateTags: (tags: Array<Tag>, position: Tag|Tag.ChildInsertionLocation) => TagArray

   /**
  *   Processes inbox items that have the required information to move into their proposed containers, performs any delayed filtering, and deletes empty items.
  **/
let cleanUp: ()
 => void
   /**
  *   Undoes the last undoable action, or throws an error if there are no undoable actions.
  **/
let undo: ()
 => void
   /**
  *   Redoes the next redoable action, or throws an error if there are no redoable actions.
  **/
let redo: ()
 => void
   /**
  *   Removes the object from the Database.
  **/
let deleteObject: (object: DatabaseObject)
 => void
   /**
  *   Copies the given tasks to the pasteboard in a variety of formats.
  **/
let copyTasksToPasteboard: (tasks: Array<Task>, pasteboard: Pasteboard)
 => void
   /**
  *   Returns true if the pasteboard contains a type that can be imported as tasks.
  **/
let canPasteTasks: (pasteboard: Pasteboard) => Boolean

   /**
  *   Reads the most relevant pasteboard type and imports them as tasks. The tasks should then be moved to the desired destination.
  **/
let pasteTasksFromPasteboard: (pasteboard: Pasteboard) => Array<Task>

 /**
  *   Returns true if there are redoable actions.
  **/
let canRedo : Boolean

    /**
  *   Returns true if there are undoable actions.
  **/
let canUndo : Boolean

    /**
  *
  **/
let document : DatabaseDocument|null

    /**
  *   Returns a flat array of all folders in the database, sorted by their order in the database.
  **/
let flattenedFolders : FolderArray

    /**
  *   Returns a flat array of all projects in the database, sorted by their order in the database.
  **/
let flattenedProjects : ProjectArray

    /**
  *   Returns a flat array of all folders and project in the database, sorted by their order in the database.
  **/
let flattenedSections : SectionArray

    /**
  *   Returns a flat array of all tags in the database, sorted by their order in the database.
  **/
let flattenedTags : TagArray

    /**
  *   Returns a flat array of all tasks in the database, including inbox items, root tasks for projects, task groups and individual tasks. Tasks are sorted by their order in the database, with the inbox preceeding the library.
  **/
let flattenedTasks : TaskArray

    /**
  *   Returns the top-level folders in the database.
  **/
let folders : FolderArray

    /**
  *   Returns a copy of the `Task`s currently in the inbox.
  **/
let inbox : Inbox

    /**
  *   Returns the top-level folders and projects in the database.
  **/
let library : Library

    /**
  *   Returns the top-level folders in the database.
  **/
let projects : ProjectArray

    /**
  *
  **/
let settings : Settings

    /**
  *   Returns the top-level tags in the database.
  **/
let tags : Tags

}
