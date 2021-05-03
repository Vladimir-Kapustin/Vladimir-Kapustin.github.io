Attribute VB_Name = "Lesson_11_1"
Option Explicit

Sub learningCount()

MsgBox "Количество ячеек в диапазоне (A1:D7) -> " & ThisWorkbook.Worksheets(1).Range("A1:D7").count

MsgBox "Количество листов в данной рабочей книге: " & ThisWorkbook.Worksheets.count

MsgBox "Количество открытых рабочих книг: " & Application.Workbooks.count

    
End Sub

Sub learnEnd()

Range("A26").End(xlUp).Select


End Sub
