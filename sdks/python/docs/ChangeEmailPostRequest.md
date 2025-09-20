# ChangeEmailPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_email** | **str** | The new email address to set must be a valid email address | 
**callback_url** | **str** | The URL to redirect to after email verification | [optional] 

## Example

```python
from better_auth.models.change_email_post_request import ChangeEmailPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ChangeEmailPostRequest from a JSON string
change_email_post_request_instance = ChangeEmailPostRequest.from_json(json)
# print the JSON string representation of the object
print(ChangeEmailPostRequest.to_json())

# convert the object into a dict
change_email_post_request_dict = change_email_post_request_instance.to_dict()
# create an instance of ChangeEmailPostRequest from a dict
change_email_post_request_from_dict = ChangeEmailPostRequest.from_dict(change_email_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


