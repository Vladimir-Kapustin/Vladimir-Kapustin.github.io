Attribute VB_Name = "Lesson_11_1"
Option Explicit

Sub learningCount()

MsgBox "���������� ����� � ��������� (A1:D7) -> " & ThisWorkbook.Worksheets(1).Range("A1:D7").count

MsgBox "���������� ������ � ������ ������� �����: " & ThisWorkbook.Worksheets.count

MsgBox "���������� �������� ������� ����: " & Application.Workbooks.count

    
End Sub

Sub learnEnd()

Range("A26").End(xlUp).Select


End Sub
